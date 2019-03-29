import { LogonPage } from '../pages/logon/logon';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProblemaPage } from '../pages/problema/problema';
import { PrimeiraEntrevistaPage } from '../pages/primeira-entrevista/primeira-entrevista';
import { OutrosProblemasPage } from '../pages/outros-problemas/outros-problemas';
import { DadosPessoaisPage } from '../pages/dados-pessoais/dados-pessoais';
import { ProcuracaoPage  } from '../pages/procuracao/procuracao';
import { AssinaturaPage } from '../pages/assinatura/assinatura';
import { DocumentosPage } from '../pages/documentos/documentos';
import { FeitoPage } from '../pages/feito/feito';


import { CompanhiaPage } from '../pages/companhia/companhia';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LogonPage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToCompanhia(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CompanhiaPage);
  }goToProblema(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProblemaPage);
  }goToPrimeiraEntrevista(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PrimeiraEntrevistaPage);
  }goToOutrosProblemas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OutrosProblemasPage);
  }goToDadosPessoais(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DadosPessoaisPage);
  }goToProcuraO(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProcuracaoPage);
  }goToAssinatura(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AssinaturaPage);
  }goToDocumentos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DocumentosPage);
  }goToFeito(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FeitoPage);
  }
}
