// import { Facebook, FacebookOriginal } from '@ionic-native/facebook';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
@Component({
  selector: 'page-autenticacao',
  templateUrl: 'autenticacao.html',
})

export class AutenticacaoPage {
  constructor(private authService: AuthService) {
    //atribuicao do pacote do facebook

  }

  async login() {

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(d => { console.log('dado', d) });
    //this.authService.
    // let permissions = new Array<string>();
    // permissions = ["public_profile", "email"];

    // this.fb.login(permissions).then((response) => {
    //   let params = new Array<string>();

    //   this.fb.api("/me?fields=name,email", params)
    //     .then(res => {

    //       //estou usando o model para criar os usuarios
    //       let usuario = new UsuarioFacebook();
    //       usuario.nome = res.name;
    //       usuario.email = res.email;
    //       usuario.senha = res.id;
    //       usuario.login = res.email;

    //       console.log(usuario);
    //       // this.logar(usuario);
    //     }, (error) => {
    //       alert(error);
    //       console.log('ERRO LOGIN: ', error);
    //     })
    // }, (error) => {
    //   alert(error);
    // });
    // console.log('entrou no login', this.fb);
    // // this.fb.login(['public_profile', 'user_friends', 'email'])
    // //   .then((res) => console.log('Logged into Facebook!', res))
    // //   .catch(e => console.log('Error logging into Facebook', e));



    // this.fb.login(['public_profile', 'user_friends', 'email'])
    //   .then(data => {
    //     console.log('dados', data);
    //   }, err => {
    //     console.log('erro', err);
    //   });

    // console.log('passou no login');

    // this.fb.logEvent();
  }

  //método para chamar api do facebook e salvar no banco o usuario
  // loginFacebook() {
  //      let permissions = new Array<string>();
  //      permissions = ["public_profile", "email"];

  //      this.facebook.login(permissions).then((response) => {
  //       let params = new Array<string>();

  //       this.facebook.api("/me?fields=name,email", params)
  //       .then(res => {

  //           //estou usando o model para criar os usuarios
  //           let usuario = new UsuarioFacebook();
  //           usuario.nome = res.name;
  //           usuario.email = res.email;
  //           usuario.senha = res.id;
  //           usuario.login = res.email;

  //           this.logar(usuario);
  //       }, (error) => {
  //         alert(error);
  //         console.log('ERRO LOGIN: ',error);
  //       })
  //     }, (error) => {
  //       alert(error);
  //     });
  //   }

  //   logar(usuario: UsuarioFacebook) {
  //       // this.salvarService.salvarFacebook(usuario)
  //       // .then(() => {
  //       //     console.log('Usuario cadastrado via facebook com sucesso!');
  //       // })
  //   }

}
export class Model {

  constructor(objeto?) {
    Object.assign(this, objeto);
  }

}

export class UsuarioFacebook extends Model {
  codigo: number;
  nome: string;
  email: string;
  login: string;
  senha: string;
}
