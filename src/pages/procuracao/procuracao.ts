import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssinaturaPage } from '../assinatura/assinatura';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'page-procuracao',
  templateUrl: 'procuracao.html'
})
export class ProcuracaoPage {


  public usuario: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.usuario = this.navParams.get('usuario') as Usuario;
    console.log(this.usuario);
  }


  ionViewDidLoad() {

  }
  goToAssinatura(params) {
    this.navCtrl.push(AssinaturaPage, { usuario: this.usuario });
  }
}
