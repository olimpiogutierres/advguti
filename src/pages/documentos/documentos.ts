import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeitoPage } from '../feito/feito';

@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html', providers: [Camera]
})
export class DocumentosPage {

  private camera: Camera = new Camera();
  public arquivos: string[] = [];
  constructor(public navCtrl: NavController) {
  }
  goToFeito() {
    this.navCtrl.push(FeitoPage);
  }

  openImage(i: number) {

    let arquivos: any[] = [];
    let arquivo: any;
    let input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*'); //you can change also file type as **'file/*'**
    input.setAttribute("multiple", ""); // If you dont want multiple select file pls remove this line

    input.addEventListener('change', (event: any) => {
      let fileList = event.target.files;
      // this.getBase64(); 

      var reader = new FileReader();
      reader.readAsDataURL(fileList[0]);
      // reader.onload = function () {

      //   arquivo = 

      // }(file);

      reader.onload = (function (f) {
        return function (e) {
          // Here you can use `e.target.result` or `this.result`
          // and `f.name`.
          this.result;
        };
      })(fileList[0]);

      reader.onload = (function (file) { // here we save variable 'file' in closure
        return function (e) { // return handler function for 'onload' event
          var data = this.result; // do some thing with data
        }
      })(fileList[0]);

      console.log(arquivo);
      // console.log("File List Object Value", fileList);
    });


    // this.arquivos = arquivos;
    // for (let a of arquivos) {
    //   this.arquivos.push(a);
    // }
    input.click();

    console.log(arquivos);
    // console.log(arquivos);

    // var options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }

    // this.camera.getPicture(options).then((imageData) => {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64 (DATA_URL):
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //   // Handle error
    // });
  }




  imageFilePath_change(event) {
    // event.preventDefault();
    // this.file = $event.target.files[0];
    console.log('$event.target.files[0];', event.currentTarget);
  }

}
