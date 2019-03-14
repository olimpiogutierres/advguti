import { UsuarioDocumento } from './../../models/usuariodocumento';
import { UsuarioService } from './../../providers/usuario/usuario.service';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, public usuarioService: UsuarioService) {

    this.signatureImages = [];
    var signatureImage: any[] = navParams.get('signatureImage');
    console.log('signatureImage', signatureImage);
    this.signatureImages = signatureImage;


  }

  goToDocumentos() {

    for (let item of this.signatureImages) {
      var usuarioDocumento = new UsuarioDocumento();
      usuarioDocumento.IdDocumento = 3;
      usuarioDocumento.IdUsuario = 1;
      usuarioDocumento.Arquivo = item;

      // console.log('item', item);
      // console.log('documento', usuarioDocumento);
      this.usuarioService.inserirDocumentos(usuarioDocumento);
    }

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
