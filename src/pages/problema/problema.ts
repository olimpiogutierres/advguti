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

  problemas: Array<Problema>;
  usuario: Usuario;
  public entrevista: Entrevista[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public entrevistaService: EntrevistaService) {

    this.usuario = this.navParams.data as Usuario;
    console.log(navParams);
  }

  ionViewDidLoad() {
    this.problemas = this.usuario.dominio.problemas;
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
