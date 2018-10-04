import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OutrosProblemasPage } from '../outros-problemas/outros-problemas';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { ProcuracaoPage } from '../procuracao/procuracao';
import { AssinaturaPage } from '../assinatura/assinatura';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';
import { Usuario } from '../../models/usuario';
import { EntrevistaService } from '../../providers/entrevista/entrevista.service';

@Component({
  selector: 'page-primeira-entrevista',
  templateUrl: 'primeira-entrevista.html'
})
export class PrimeiraEntrevistaPage {

  public usuario: Usuario;
  public problema: Problema;
  public entrevistas: Entrevista;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.usuario = this.navParams.get('usuario') as Usuario;
    this.problema = this.navParams.get('problema') as Problema;
    this.entrevistas = this.navParams.get('entrevista') as Entrevista;

    

    console.log('this.', this.navParams);
  }
  ionViewDidLoad(){
   
  }
  goToOutrosProblemas() {
    this.navCtrl.push(OutrosProblemasPage);
  }
}
