import { HttpClient } from '@angular/common/http';
import { AdminProblemasPage } from './../admin-problemas/admin-problemas';
import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../providers/usuario/usuario.service';
import { DominioPage } from '../dominio/dominio';
import { ProblemaPage } from '../problema/problema';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the LogonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logon',
  templateUrl: 'logon.html',
})
export class LogonPage {

  signupForm: FormGroup;
  constructor( public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public usuarioService: UsuarioService) {
    let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    this.signupForm = this.formBuilder.group({

      telefone: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])]

    })


  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogonPage');
  }

  goToAdminProblema() {
    this.navCtrl.push(AdminProblemasPage);
  }
  goToDominios() {
    let usuario: Usuario = this.signupForm.value;
    usuario.Nome = '';
    usuario.Logradouro = '';
    usuario.Numero = '';
    usuario.Complemento = '';
    usuario.Bairro = '';
    usuario.Cidade = '';
    usuario.Estado = '';
    usuario.Pais = '';
    usuario.CEP = '';


    console.log('creating');
    this.usuarioService.create(usuario).subscribe((u: Usuario) => {

      console.log('logon u', u);

      usuario.id = u.id;


      this.navCtrl.setRoot(DominioPage, usuario);
    });

  }

}
