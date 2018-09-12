import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeitoPage } from '../feito/feito';

@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html'
})
export class DocumentosPage {

  constructor(public navCtrl: NavController) {
  }
  goToFeito(){
    this.navCtrl.push(FeitoPage);
  }
}
