import { PerguntaService } from './../../providers/pergunta/pergunta.service';
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
import { forEach } from '@firebase/util';

@Component({
  selector: 'page-primeira-entrevista',
  templateUrl: 'primeira-entrevista.html'
})
export class PrimeiraEntrevistaPage {

  public usuario: Usuario;
  public problemas: Problema[];
  public perguntas: Pergunta[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public perguntaService: PerguntaService) {

    this.usuario = this.navParams.get('usuario') as Usuario;
    this.problemas = this.navParams.get('problema') as Problema[];
    // this.entrevistas = this.navParams.get('entrevista') as Entrevista;


    for (let key of this.problemas) {

      this.perguntaService.list(key as Problema).subscribe((data: Pergunta[]) => {

        for (let pergunta of data) {
          this.perguntas.push(pergunta);
        }
 
      });


    }

    console.log('this.perguntas', this.perguntas);
  }


  ionViewDidLoad() {


  }
  goToOutrosProblemas() {
    this.navCtrl.push(OutrosProblemasPage);
  }
}
