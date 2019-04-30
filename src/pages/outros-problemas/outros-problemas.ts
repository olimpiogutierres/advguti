import { ProblemasService } from './../../providers/problemas/problemas.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';
import { Usuario } from '../../models/usuario';
// import { Dominio } from '../../models/dominio';
import { PerguntaService } from './../../providers/pergunta/pergunta.service';
import { RespostaService } from '../../providers/resposta/resposta.service';
import { UsuarioService } from '../../providers/usuario/usuario.service';
import { UsuarioResposta } from '../../models/usuarioresposta';


@Component({
  selector: 'page-outros-problemas',
  templateUrl: 'outros-problemas.html'
})
export class OutrosProblemasPage {
  public problemas: Problema[];
  public problemasSelecionados: Problema[] = [];
  public usuario: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public problemaService: ProblemasService, public usuarioService:UsuarioService) {
    this.usuario = this.navParams.get('usuario') as Usuario;
    //console.log('OutrosProblemasPage111', this.usuario);



    this.problemaService.list( this.usuario.idDominioSelecionado).subscribe(d => {

      this.problemas = d.filter(d => d.problemaComum == true);
    //  console.log('this.problemas', this.problemas);
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


    for (let a of this.problemasSelecionados) {

      let usuarioResposta: UsuarioResposta = {} as UsuarioResposta;
      usuarioResposta.IdProblema = parseInt(a.id);
      usuarioResposta.IdUsuario = parseInt(this.usuario.id);
      usuarioResposta.IdStatus = 1;
      usuarioResposta.IdPergunta = null;
      usuarioResposta.IdResposta = null;
      // this.usuario.usuarioProblema.push(b);
      this.usuarioService.inserirRespostaUsuario(usuarioResposta);

    }



    // this.navCtrl.push(OutrosProblemasPage);
    this.navCtrl.push(DadosPessoaisPage, { usuario: this.usuario });
  }
}
