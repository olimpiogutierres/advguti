import { PerguntaService } from './../../providers/pergunta/pergunta.service';
import { ProblemasService } from './../../providers/problemas/problemas.service';
import { DominioService } from './../../providers/dominio/dominio.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminProblemasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-problemas',
  templateUrl: 'admin-problemas.html',
})
export class AdminProblemasPage {

  public respostas: any = [
    { 
      label: 'First Name',
      value: '',
      index: 1
    }
  ];
  public TipoResposta: number = 0;
  public dominios: Dominio[];
  public problemas: Problema[];
  public perguntas: Pergunta[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dominioService: DominioService, private perguntaService: PerguntaService) {
    dominioService.list().subscribe((d: Dominio[]) => {
      this.dominios = d;
    });
  }

  public Multirespostas(status: number) {

    console.log(status);
    this.TipoResposta = status;
  }
  public escolherDominio(d: Dominio) {
    this.problemas = d.problema;
  }

  public onChange(keycode) {

    // console.log();
    if (keycode == 13) {
      this.respostas.push({
        label: 'Last Name',
        value: '',
        index: this.respostas.length +1
      });
    }
    // console.log("keycode,", keycode);
  }

  public escolherProblema(problema: Problema) {
   
    this.perguntaService.list(problema).subscribe((d: Pergunta[]) => {
      this.perguntas = d;
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminProblemasPage');
  }

}
