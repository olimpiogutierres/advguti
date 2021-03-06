import { UsuarioDocumento } from './../../models/usuariodocumento';
import { UsuarioService } from './../../providers/usuario/usuario.service';
import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';
import { SignaturePage } from "./signature";
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'page-assinatura',
  templateUrl: 'assinatura.html',
  entryComponents: [
    SignaturePage
  ],
})
export class AssinaturaPage {
  public signatureImages: any[] = [];
  public usuario: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, public usuarioService: UsuarioService) {

    this.usuario = this.navParams.get('usuario') as Usuario;
    // console.log('documentosuser', this.usuario);
    this.signatureImages = [];
    var signatureImage: any[] = navParams.get('signatureImage');

    this.signatureImages = signatureImage;
    console.log('signatureImage', this.signatureImages);

    if (this.signatureImages == null)
      this.signatureImages = [];
  }

  goToDocumentos() {

    //console.log('documentosuser', this.usuario);



    for (let item of this.signatureImages) {
      var usuarioDocumento = new UsuarioDocumento();
      usuarioDocumento.IdDocumento = 3;
      usuarioDocumento.IdUsuario = Number(this.usuario.id);
      usuarioDocumento.Arquivo = item;

      //console.log('item', item);
      console.log('documento', usuarioDocumento);
      this.usuarioService.inserirDocumentos(usuarioDocumento).subscribe(d => { console.log('returno inserir doc', d) });
    }

    this.navCtrl.push(DocumentosPage, { usuario: this.usuario });
  }

  openSignatureModel() {
    setTimeout(() => {
      let modal = this.modalController.create(SignaturePage, { images: this.signatureImages, usuario: this.usuario });
      modal.present();
    }, 300);
  }

  removerAssinatura(assinatura: any) {
    this.signatureImages = this.signatureImages.filter(d => d != assinatura);

  }

}
