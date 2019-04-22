import { ProblemasService } from './../../providers/problemas/problemas.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { Usuario } from '../../models/usuario';
// import { Dominio } from '../../models/dominio';
import { PerguntaService } from './../../providers/pergunta/pergunta.service';


@Component({
  selector: 'page-outros-problemas',
  templateUrl: 'outros-problemas.html'
})
export class OutrosProblemasPage {
  public problemas: Problema[];
  public usuario: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public problemaService: ProblemasService) {
    this.usuario = this.navParams.get('usuario') as Usuario;
    console.log('OutrosProblemasPage111', this.usuario);

    var dominio = new Dominio;
    dominio.id = this.usuario.idDominioSelecionado;

    console.log('dominio', dominio);
    this.problemaService.list(dominio).subscribe(d => {

      this.problemas = d.filter(d => d.problemaComum == true);
      console.log(this.problemas);
    },error=>{
      console.log(error);
    });
  }
  goToDadosPessoais() {
    // this.navCtrl.push(OutrosProblemasPage);
    this.navCtrl.push(DadosPessoaisPage, { usuario: this.usuario });
  }
}
