// import { Facebook, FacebookOriginal } from '@ionic-native/facebook';
import { AuthService, SocialUser } from "angular4-social-login";
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

  async loginFacebook() {

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((d: SocialUser) => { console.log('dado', d) });
  }

  async loginGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((d: SocialUser) => { console.log('dado', d) });
  }
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
