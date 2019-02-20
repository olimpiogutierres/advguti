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

    this.signatureImages = [];
    var signatureImage: any[] = navParams.get('signatureImage');
    // console.log('signatureImage', signatureImage);
    this.signatureImages = signatureImage;


  }
 
  goToDocumentos() {
    this.navCtrl.push(DocumentosPage);
  }

  openSignatureModel() {
    setTimeout(() => {
      let modal = this.modalController.create(SignaturePage, { images: this.signatureImages });
      modal.present();
    }, 300);
  }

  removerAssinatura(assinatura: any) {
    this.signatureImages = this.signatureImages.filter(d => d != assinatura);
 
  }

}
