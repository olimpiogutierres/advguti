import { UsuarioService } from './../../providers/usuario/usuario.service';
import { PerguntaService } from './../../providers/pergunta/pergunta.service';
import { Component, ViewChild, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OutrosProblemasPage } from '../outros-problemas/outros-problemas';
import { Usuario } from '../../models/usuario';
import { UsuarioResposta } from '../../models/usuarioresposta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-primeira-entrevista',
  templateUrl: 'primeira-entrevista.html'
})
export class PrimeiraEntrevistaPage {


  @ViewChild('my_input') myInput: any;

  public usuario: Usuario;
  public problemas: Problema[];
  public perguntas: Pergunta[] = [];
  public usuarioRespostas: UsuarioResposta[] = [];
  public loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public perguntaService: PerguntaService, public usuarioService: UsuarioService, public fb: FormBuilder) {

    this.usuario = this.navParams.get('usuario') as Usuario;
    this.problemas = this.navParams.get('problema') as Problema[];

    this.loginForm = this.fb.group({

      'outroInput': ['', Validators.required]
    });
    for (let key of this.problemas) {

      this.perguntaService.list(key as Problema).subscribe((data: Pergunta[]) => {
        for (let pergunta of data) {
          if (!this.perguntas.find(d => d.id == pergunta.id)) {

            pergunta.idProblema = Number(key.id);
            this.perguntas.push(pergunta);
          }
        }
      });
    }
  }

  selecionarRespostas(input: any, pergunta: Pergunta, resposta: Resposta) {


    if (resposta == null)
      return;

    this.usuarioRespostas = this.usuarioRespostas.filter(d => d.IdPergunta != pergunta.id);

    var respostaUsuario = new UsuarioResposta();
    respostaUsuario.IdProblema = pergunta.idProblema;
    respostaUsuario.IdPergunta = pergunta.id;
    respostaUsuario.IdStatus = 1;
    respostaUsuario.IdUsuario = Number(this.usuario.id);


    if (resposta != null) {
      respostaUsuario.IdResposta = resposta.id;
    }
    else {
      respostaUsuario.IdResposta = null;
      if (input != null)
        input.setFocus();
    }

    this.usuarioRespostas.push(respostaUsuario);

  }


  ionViewDidLoad() {


  }
  goToOutrosProblemas() {

    for (let a of this.usuarioRespostas) {
      this.usuarioService.inserirRespostaUsuario(a);
    }
    this.navCtrl.push(OutrosProblemasPage, { usuario: this.usuario });
  }

  atualizarRelato(event, q: Pergunta) {


    
    console.log(event.key, q);
    q.manual = true;


    var usuarioResposta = this.usuarioRespostas.find(d => d.IdPergunta == q.id);

    if (usuarioResposta === undefined || usuarioResposta == null) {

      usuarioResposta = new UsuarioResposta();
      usuarioResposta.IdProblema = q.idProblema;
      usuarioResposta.IdPergunta = q.id;
      usuarioResposta.IdStatus = 1;
      usuarioResposta.IdUsuario = Number(this.usuario.id);
      usuarioResposta.IdResposta = null;
      usuarioResposta.RelatoManual = '';
    }

    usuarioResposta.RelatoManual = usuarioResposta.RelatoManual + String(event.key);

    this.usuarioRespostas = this.usuarioRespostas.filter(d => d.IdPergunta != q.id);
    this.usuarioRespostas.push(usuarioResposta);

  }
}
