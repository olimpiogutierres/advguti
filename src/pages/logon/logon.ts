import { AssinaturaPage } from './../assinatura/assinatura';
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
import { CompanhiaPage } from '../companhia/companhia';
// import { Dominio } from '../../models/dominio';
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
  usuario: Usuario;
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
  async goToDominios() {

    this.usuario = new Usuario;
    // console.log('this.usuarioFacebookGoogle ', this.usuarioFacebookGoogle);
    if (this.usuarioFacebookGoogle != null) {
      this.usuario.email = this.usuarioFacebookGoogle.email;
      this.usuario.nome = this.usuarioFacebookGoogle.name;// this.usuarioFacebookGoogle.firstName + ' ' + this.usuarioFacebookGoogle.lastName;
      this.usuario.logradouro = '';
      this.usuario.numero = '';
      this.usuario.complemento = '';
      this.usuario.bairro = '';
      this.usuario.cidade = '';
      this.usuario.estado = '';
      this.usuario.pais = '';
      this.usuario.cep = '';
      this.usuario.telefone = '';
    }
    else {
      this.usuario = this.signupForm.value;
      this.usuario.nome = '';
      this.usuario.logradouro = '';
      this.usuario.numero = '';
      this.usuario.complemento = '';
      this.usuario.bairro = '';
      this.usuario.cidade = '';
      this.usuario.estado = '';
      this.usuario.pais = '';
      this.usuario.cep = '';
      this.usuario.telefone = '';
    }



    console.log('creating', this.usuario);

    this.usuarioService.check(this.usuario).subscribe(
      result => {
        this.usuario = result;
        this.usuario.id = result.id;
        this.dominioService.list().subscribe(((d: Dominio[]) => {
          this.goToProblema(d.filter(d => d.id == 1)[0]);
        }));
      },
      error => {

        this.usuarioService.create(this.usuario).subscribe((u: Usuario) => {
          this.usuario.id = u.id;
          this.dominioService.list().subscribe(((d: Dominio[]) => {
            this.goToProblema(d.filter(d => d.id == 1)[0]);
          }));
        });
      });
  }

  public goToProblema(dominio: Dominio) {

    this.usuario.idDominioSelecionado = dominio.id;

    this.navCtrl.setRoot(CompanhiaPage, {
      problema: dominio.problema,
      usuario: this.usuario
    });




  }

}
