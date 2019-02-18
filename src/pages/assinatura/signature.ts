import { AssinaturaPage } from './assinatura';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
// import {HomePage} from '../home/home';
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  public signatureImages: any[] = [];

  public signaturePadOptions: Object = {
    'minWidth': 2, 'canvasWidth': 340, 'canvasHeight': 200
  };
  public signatureImage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var images: any[] = navParams.get('images');
    // console.log('navParams.get(images)', navParams.get('images'));
    if (images == undefined)
      this.signatureImages = [];
    else
      this.signatureImages = images;
    console.log('images', this.signatureImages);
    // console.log('this.signatureImages', this.signatureImages);
    // console.log('this.signatureImages,leng', this.signatureImages.length);
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1); console.log(canvas.offsetWidth);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }


  ngAfterViewInit() {
    console.log("Reset Model Screen");
    this.signaturePad.clear();
    this.canvasResize();
  }

  drawCancel() {
    this.navCtrl.push(AssinaturaPage);
  }

  drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();

    console.log('this.signatureImage', this.signatureImage)
    console.log('this.signatureImages', this.signatureImages)

    if (this.signatureImages == undefined || this.signatureImages == null)
      this.signatureImages = [];

    this.signatureImages.push(this.signatureImage);
    this.navCtrl.push(AssinaturaPage, { signatureImage: this.signatureImages });
  }

  drawClear() {
    this.signaturePad.clear();
  }


}
