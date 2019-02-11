import { PerguntaService } from './../../providers/pergunta/pergunta.service';
import { Component, ViewChild } from '@angular/core';
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


  @ViewChild('my_input') myInput: any;

  public usuario: Usuario;
  public problemas: Problema[];
  public perguntas: Pergunta[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public perguntaService: PerguntaService) {

    this.usuario = this.navParams.get('usuario') as Usuario;
    this.problemas = this.navParams.get('problema') as Problema[];
    // this.entrevistas = this.navParams.get('entrevista') as Entrevista;

    console.log('PrimeiraEntrevistaPage1',this.usuario);

    for (let key of this.problemas) {

      this.perguntaService.list(key as Problema).subscribe((data: Pergunta[]) => {

        for (let pergunta of data) {

          if (!this.perguntas.find(d => d.id == pergunta.id))
          // if(pergunta.)
            this.perguntas.push(pergunta);
        }

      });


      // this.perguntas = Array.from(new Set(this.perguntas));
    }

    console.log('this.perguntas', this.perguntas);
  }




  ionViewDidLoad() {


  }
  goToOutrosProblemas() {
    console.log('this.navCtrl.push(OutrosProblemasPage, { usuario: this.usuario });', this.usuario);

    this.navCtrl.push(OutrosProblemasPage, { usuario: this.usuario });
  }
}
