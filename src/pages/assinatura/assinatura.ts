import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';
import { SignaturePage } from "./signature";

@Component({
  selector: 'page-assinatura',
  templateUrl: 'assinatura.html',
  entryComponents: [
    SignaturePage
  ],
})
export class AssinaturaPage {
  public signatureImages: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {

    console.log('signatureImage', signatureImage);

    var signatureImage: any = navParams.get('signatureImage');
    // this.signatureImages.push(signatureImage);
  }
  goToDocumentos() {
    this.navCtrl.push(DocumentosPage);
  }

  openSignatureModel(indice: number) {
    setTimeout(() => {
      let modal = this.modalController.create(SignaturePage, { images: this.signatureImages });
      modal.present();
    }, 300);

  }
}
