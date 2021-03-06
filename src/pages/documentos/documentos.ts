// import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeitoPage } from '../feito/feito';
import { UsuarioService } from '../../providers/usuario/usuario.service';
import { UsuarioDocumento } from '../../models/usuariodocumento';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html'
})
export class DocumentosPage {



  // private camera: Camera = new Camera();
  public documentos: Arquivos[] = [];
  public usuario: Usuario;
  constructor(public navCtrl: NavController, public usuarioService: UsuarioService, public navParams: NavParams) {
    this.usuario = this.navParams.get('usuario') as Usuario;
  }
  goToFeito() {

    for (let item of this.documentos) {
      var usuarioDocumento = new UsuarioDocumento();
      usuarioDocumento.IdDocumento = item.tipo;
      usuarioDocumento.IdUsuario = Number(this.usuario.id);
      usuarioDocumento.Arquivo = String(item.file);

      // console.log('item', item);
      console.log('documento', usuarioDocumento);
      this.usuarioService.inserirDocumentos(usuarioDocumento).subscribe(d => { console.log('returno inserir doc', d) });;
    }


    this.navCtrl.push(FeitoPage);
  }

  openImage(tipoDocumento: number) {


    let input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*'); //you can change also file type as **'file/*'**
    // input.setAttribute("multiple", ""); // If you dont want multiple select file pls remove this line

    input.addEventListener('change', (event: any) => {
      let listaArquivo = event.target.files;

      this.getBase64(listaArquivo[0]).then(dados => {
        let arquivo = new Arquivos();
        arquivo.tipo = tipoDocumento;
        arquivo.name = listaArquivo[0].name;
        arquivo.file = dados;



        this.documentos = this.documentos.filter(d => d.name != arquivo.name);

        this.documentos.push(arquivo);

        // console.log(this.documentos);
      });

    });

    input.click();
  }

  removerDocumento(doc: any) {
    this.documentos = this.documentos.filter(d => d != doc);
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString().replace(/^data:(.*;base64,)?/, '');
        if ((encoded.length % 4) > 0) {
          encoded += '='.repeat(4 - (encoded.length % 4));
        }
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  }



  imageFilePath_change(event) {
    //console.log('$event.target.files[0];', event.currentTarget);
  }

}

export class Arquivos {
  tipo: number;
  name: string;
  file: {};
}
