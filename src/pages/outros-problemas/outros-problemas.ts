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
  public problemasSelecionados: Problema[] = [];
  public usuario: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public problemaService: ProblemasService) {
    this.usuario = this.navParams.get('usuario') as Usuario;
    console.log('OutrosProblemasPage111', this.usuario);



    this.problemaService.list( this.usuario.idDominioSelecionado).subscribe(d => {

      this.problemas = d.filter(d => d.problemaComum == true);
      console.log('this.problemas', this.problemas);
    }, error => {
      console.log(error);
    });
  }


  escolherProblemas(problema: Problema) {



    problema.selected = problema.selected === true ? false : true;

    if (problema.selected === true) {
      this.problemasSelecionados.push(problema);
    }
    else {
      this.problemasSelecionados.forEach((item, index) => {
        if (item === problema) this.problemasSelecionados.splice(index, 1);
      });
    }
  }


  goToDadosPessoais() {
    // this.navCtrl.push(OutrosProblemasPage);
    this.navCtrl.push(DadosPessoaisPage, { usuario: this.usuario });
  }
}
