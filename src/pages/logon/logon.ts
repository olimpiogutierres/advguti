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
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
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

  goToDominios() {
    let usuario: Usuario = this.signupForm.value;


    console.log('creating');
    let a = this.usuarioService.create(usuario);
    console.log('usuario criadooo:', a);
    console.log('created' );

    console.log('goToDominios;', usuario.id);



    this.navCtrl.setRoot(DominioPage, usuario);
  }

}
