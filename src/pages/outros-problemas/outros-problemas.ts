import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { ProcuracaoPage } from '../procuracao/procuracao';
import { AssinaturaPage } from '../assinatura/assinatura';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';

@Component({
  selector: 'page-outros-problemas',
  templateUrl: 'outros-problemas.html'
})
export class OutrosProblemasPage {

  constructor(public navCtrl: NavController) {
  }
  goToDadosPessoais(){
    this.navCtrl.push(DadosPessoaisPage);
  }
}
