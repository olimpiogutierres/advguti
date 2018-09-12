
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblemaPage } from '../problema/problema';
import { PrimeiraEntrevistaPage } from '../primeira-entrevista/primeira-entrevista';
import { OutrosProblemasPage } from '../outros-problemas/outros-problemas';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { ProcuracaoPage } from '../procuracao/procuracao';
import { AssinaturaPage } from '../assinatura/assinatura';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';




@Component({
  selector: 'page-companhia',

  templateUrl: 'companhia.html'
})
export class CompanhiaPage {
  companhias: Array<{ nome: string, nacional: boolean }>
  public searchString: string;
  constructor(public navCtrl: NavController) {
  }

  
  goToProblema() {
    this.navCtrl.push(ProblemaPage);
  }

  ionViewDidLoad() {

    this.companhias = [{ nome: 'AZUL', nacional: true },
    { nome: 'GOL', nacional: true },
    { nome: 'LATAM - DOMÉSTICO', nacional: true },
    { nome: 'PASSAREDO', nacional: true },
    { nome: 'AEROLÍNEAS ARGENTINAS', nacional: false },
    { nome: 'AEROMÉXICO', nacional: false },
    { nome: 'AIR CANADA', nacional: false },
    { nome: 'AIR CHINA', nacional: false },
    { nome: 'AIR EUROPA', nacional: false },
    { nome: 'AIRFRANCE', nacional: false },
    { nome: 'ALITALIA', nacional: false },
    { nome: 'AMERICAN AIRLINES', nacional: false },
    { nome: 'AUSTRAL', nacional: false },
    { nome: 'AVIANCA', nacional: false },
    { nome: 'BOLIVIANA DE AVIACION', nacional: false },
    { nome: 'BRITISH AIRWAYS', nacional: false },
    { nome: 'COPA AIRLINES', nacional: false },
    { nome: 'CUBANA DE AVIACION', nacional: false },
    { nome: 'DELTA AIRLINES', nacional: false },
    { nome: 'EMIRATES', nacional: false },
    { nome: 'ETHIOPIAN', nacional: false },
    { nome: 'ETIHAD', nacional: false },
    { nome: 'IBERIA', nacional: false },
    { nome: 'KLM', nacional: false },
    { nome: 'LATAM - INTERNACIONAL', nacional: false },
    { nome: 'LUFTHANSA', nacional: false },
    { nome: 'QATAR', nacional: false },
    { nome: 'ROYAL AIR MAROC', nacional: false },
    { nome: 'SOUTH AFRICAN', nacional: false },
    { nome: 'SWISS', nacional: false },
    { nome: 'TAAG', nacional: false },
    { nome: 'TAP', nacional: false },
    { nome: 'TURKISH', nacional: false },
    { nome: 'UNITED ', nacional: false }
    ];
    console.log(this.companhias);
  }
}
