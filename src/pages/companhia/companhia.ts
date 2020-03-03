import { UsuarioService } from './../../providers/usuario/usuario.service';
import { PerguntaService } from './../../providers/pergunta/pergunta.service';

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProblemaPage } from '../problema/problema';
import { PrimeiraEntrevistaPage } from '../primeira-entrevista/primeira-entrevista';
import { OutrosProblemasPage } from '../outros-problemas/outros-problemas';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { ProcuracaoPage } from '../procuracao/procuracao';
import { AssinaturaPage } from '../assinatura/assinatura';
import { DocumentosPage } from '../documentos/documentos';
import { FeitoPage } from '../feito/feito';
import { Usuario } from '../../models/usuario';
import { CompanhiaAerea } from '../../models/companhiaaerea';
import { UsuarioCompanhiaAerea } from '../../models/usuariocompanhiaaerea';




@Component({
  selector: 'page-companhia',

  templateUrl: 'companhia.html'
})
export class CompanhiaPage {
  public companhias: CompanhiaAerea[];
  public companhiaSelecionada: CompanhiaAerea;
  public searchString: string;
  public problemas: Problema[];
  public usuario: Usuario;
  @ViewChild('content') private content: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public perguntaService: PerguntaService, public usuarioService: UsuarioService) {

    this.problemas = this.navParams.get('problema') as Problema[];
    this.usuario = this.navParams.get('usuario') as Usuario;
  }

  selecionarRespostas(companhiaAerea: CompanhiaAerea) {
    this.companhiaSelecionada = companhiaAerea;
    console.log(this.usuario);
    this.scrollToBottomOnInit();
  } 

  scrollToBottomOnInit() {
    setTimeout(() => {
        if (this.content.scrollToBottom) {
            this.content.scrollToBottom(300);
        }
    }, 300);
  }

  goToProblema() {



    var usuarioCompanhiaAerea = new UsuarioCompanhiaAerea();
    usuarioCompanhiaAerea.IdUsuario = Number(this.usuario.id);
    usuarioCompanhiaAerea.IdCompanhiaAerea = this.companhiaSelecionada.id;


    console.log(usuarioCompanhiaAerea);

    this.usuarioService.inserirUsuarioCompanhiaAerea(usuarioCompanhiaAerea).subscribe(d => { console.log('retorno inserir ca', d) });;;

    this.navCtrl.push(ProblemaPage, {
      problema: this.problemas,
      usuario: this.usuario
    });
  //  this.scrollToBottomOnInit();
  }

  ionViewDidLoad() {

    this.perguntaService.listCompanhiasAereas().subscribe((x: CompanhiaAerea[]) => {
      this.companhias = x;
      console.log(this.companhias);
    });
    // this.companhias = [{ nome: 'AZUL', nacional: true },
    // { nome: 'GOL', nacional: true },
    // { nome: 'LATAM - DOMÉSTICO', nacional: true },
    // { nome: 'PASSAREDO', nacional: true },
    // { nome: 'AEROLÍNEAS ARGENTINAS', nacional: false },
    // { nome: 'AEROMÉXICO', nacional: false },
    // { nome: 'AIR CANADA', nacional: false },
    // { nome: 'AIR CHINA', nacional: false },
    // { nome: 'AIR EUROPA', nacional: false },
    // { nome: 'AIRFRANCE', nacional: false },
    // { nome: 'ALITALIA', nacional: false },
    // { nome: 'AMERICAN AIRLINES', nacional: false },
    // { nome: 'AUSTRAL', nacional: false },
    // { nome: 'AVIANCA', nacional: false },
    // { nome: 'BOLIVIANA DE AVIACION', nacional: false },
    // { nome: 'BRITISH AIRWAYS', nacional: false },
    // { nome: 'COPA AIRLINES', nacional: false },
    // { nome: 'CUBANA DE AVIACION', nacional: false },
    // { nome: 'DELTA AIRLINES', nacional: false },
    // { nome: 'EMIRATES', nacional: false },
    // { nome: 'ETHIOPIAN', nacional: false },
    // { nome: 'ETIHAD', nacional: false },
    // { nome: 'IBERIA', nacional: false },
    // { nome: 'KLM', nacional: false },
    // { nome: 'LATAM - INTERNACIONAL', nacional: false },
    // { nome: 'LUFTHANSA', nacional: false },
    // { nome: 'QATAR', nacional: false },
    // { nome: 'ROYAL AIR MAROC', nacional: false },
    // { nome: 'SOUTH AFRICAN', nacional: false },
    // { nome: 'SWISS', nacional: false },
    // { nome: 'TAAG', nacional: false },
    // { nome: 'TAP', nacional: false },
    // { nome: 'TURKISH', nacional: false },
    // { nome: 'UNITED ', nacional: false }
    // ];
    console.log(this.companhias);
  }
}
