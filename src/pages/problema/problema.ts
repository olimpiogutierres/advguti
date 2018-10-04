import { ProblemasService } from './../../providers/problemas/problemas.service';
import { EntrevistaService } from './../../providers/entrevista/entrevista.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrimeiraEntrevistaPage } from '../primeira-entrevista/primeira-entrevista';
import { OutrosProblemasPage } from '../outros-problemas/outros-problemas';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { ProcuracaoPage } from '../procuracao/procuracao';
import { AssinaturaPage } from '../assinatura/assinatura';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'page-problema',
  templateUrl: 'problema.html'
})
export class ProblemaPage {

  problemas: Problema[];
  usuario: Usuario;
  dominio: Dominio;
  public entrevista: Entrevista[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public problemaService: ProblemasService) {

    this.usuario = this.navParams.get('usuario') as Usuario;
    this.dominio = this.navParams.get('dominio') as Dominio;    
    console.log(navParams);
  }

  ionViewDidLoad() {
    this.problemaService.list(this.dominio).subscribe(((d: Problema[]) => {
      this.problemas = d;

      console.log('this.problemas',this.problemas);
    }));


  }
  goToPrimeiraEntrevista(problema: Problema) {
    // this.entrevistaService.list(problema).subscribe(((d: Entrevista[]) => {
    //   this.entrevista = d;
    //   console.log(this.entrevista);

    //   // this.entrevista.forEach(element => {
    //   //   element.
    //   // });

    //   this.navCtrl.push(PrimeiraEntrevistaPage,
    //     {
    //       problema: problema,
    //       usuario: this.usuario, 
    //       entrevista: this.entrevista
    //     });
    // }));


  }
}
