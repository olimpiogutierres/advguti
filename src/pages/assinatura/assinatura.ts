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

    // console.log('signatureImage', signatureImage);

    // console.log('signatureImages',this.signatureImages)
    var signatureImage: any[] = navParams.get('signatureImage');
    console.log('signatureImage', signatureImage);

    // if (signatureImage.length > 0) {
    //   for (let value of signatureImage) {
    //     this.signatureImages.push(value);
    //     console.log('entrou foreach');
    //   }
    // }

    this.signatureImages = signatureImage;
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
