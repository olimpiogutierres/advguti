import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssinaturaPage } from '../assinatura/assinatura';
import { DocumentosPage } from '../documentos/documentos'; 
import { FeitoPage } from '../feito/feito';

@Component({
  selector: 'page-procuracao',
  templateUrl: 'procuracao.html'
})
export class ProcuracaoPage {

  constructor(public navCtrl: NavController) {
  }
  goToAssinatura(params) {
    this.navCtrl.push(AssinaturaPage);
  }
}
