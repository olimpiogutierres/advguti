import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcuracaoPage } from '../procuracao/procuracao';
// import { AssinaturaPage } from '../assinatura/assinatura';
// import { DocumentosPage } from '../documentos/documentos';
// import { FeitoPage } from '../feito/feito';

@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html' 
})
export class DadosPessoaisPage {

  constructor(public navCtrl: NavController) {
  }
  goToProcuraO(){
    this.navCtrl.push(ProcuracaoPage);
  }
}
