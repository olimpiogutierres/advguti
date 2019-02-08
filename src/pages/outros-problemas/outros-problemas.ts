import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { Usuario } from '../../models/usuario';
import { PerguntaService } from './../../providers/pergunta/pergunta.service';


@Component({
  selector: 'page-outros-problemas',
  templateUrl: 'outros-problemas.html'
})
export class OutrosProblemasPage {

  public usuario: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams, public perguntaService: PerguntaService) {
    this.usuario = this.navParams.get('usuario') as Usuario;
    // console.log('OutrosProblemasPage111', this.usuario);

    this.perguntaService.list()
  }
  goToDadosPessoais() {
    this.navCtrl.push(DadosPessoaisPage);
  }
}
