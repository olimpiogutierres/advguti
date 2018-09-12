import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';

@Component({
  selector: 'page-assinatura',
  templateUrl: 'assinatura.html'
})
export class AssinaturaPage {

  constructor(public navCtrl: NavController) {
  }
  goToDocumentos(){
    this.navCtrl.push(DocumentosPage);
  }
}
