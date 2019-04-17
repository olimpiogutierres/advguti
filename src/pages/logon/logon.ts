import { AdminProblemasPage } from './../admin-problemas/admin-problemas';
import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../providers/usuario/usuario.service';
import { DominioPage } from '../dominio/dominio';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { ProblemaPage } from '../problema/problema';
import { DominioService } from '../../providers/dominio/dominio.service';
/**
 * Generated class for the LogonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-logon',
  templateUrl: 'logon.html',
})
export class LogonPage {

  signupForm: FormGroup;
  usuarioFacebookGoogle: SocialUser = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public usuarioService: UsuarioService, private dominioService: DominioService, private authService: AuthService) {
    let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    this.signupForm = this.formBuilder.group({

      telefone: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])]

    })


  }

  async loginFacebook() {

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((d: SocialUser) => {
      this.usuarioFacebookGoogle = d;
      this.goToDominios();
    });
  }

  async loginGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((d: SocialUser) => {
      this.usuarioFacebookGoogle = d;
      this.goToDominios();
    });
  }


  ionViewDidLoad() {
    // console.log('ionViewDidLoad LogonPage');
  }

  goToAdminProblema() {
    this.navCtrl.push(AdminProblemasPage);
  }
  goToDominios() {

    let usuario: Usuario = new Usuario;
    // console.log('this.usuarioFacebookGoogle ', this.usuarioFacebookGoogle);
    if (this.usuarioFacebookGoogle != null) {
      usuario.email = this.usuarioFacebookGoogle.email;
      usuario.Nome = this.usuarioFacebookGoogle.name;// this.usuarioFacebookGoogle.firstName + ' ' + this.usuarioFacebookGoogle.lastName;
      usuario.Logradouro = '';
      usuario.Numero = '';
      usuario.Complemento = '';
      usuario.Bairro = '';
      usuario.Cidade = '';
      usuario.Estado = '';
      usuario.Pais = '';
      usuario.CEP = '';
      usuario.telefone = '';
    }
    else {
      usuario = this.signupForm.value;
      usuario.Nome = '';
      usuario.Logradouro = '';
      usuario.Numero = '';
      usuario.Complemento = '';
      usuario.Bairro = '';
      usuario.Cidade = '';
      usuario.Estado = '';
      usuario.Pais = '';
      usuario.CEP = '';
      usuario.telefone = '';
    }



    // console.log('creating');
    this.usuarioService.create(usuario).subscribe((u: Usuario) => {

      // console.log('logon u', u);

      usuario.id = u.id;
      this.dominioService.list().subscribe(((d: Dominio[]) => {

        this.goToProblema(d.filter(d => d.id == 1)[0]);
      }));

      /**
       * temporario
       * 
       */
    });

  }

  public goToProblema(dominio: Dominio) {

    let usuario: Usuario = this.navParams.data as Usuario;

    // console.log('this.usuarioService.getKeys;', dominio);


    usuario.idDominioSelecionado = dominio.id;

    this.navCtrl.setRoot(ProblemaPage, {
      problema: dominio.problema,
      usuario: usuario
    });




  }

}
