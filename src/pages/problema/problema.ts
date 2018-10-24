import { UsuarioService } from './../../providers/usuario/usuario.service';
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
  problemasSelecionados: Problema[] = [];
  usuario: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, public entrevistaService: EntrevistaService, public usuarioService: UsuarioService) {


    this.usuario = this.navParams.get('usuario') as Usuario;
    this.problemas = this.navParams.get('problema') as Problema[];
    // this.problemasSelecionados = this.problemas;

    console.log('usuarioid problemas', this.usuario);
    console.log(navParams);
  }

  ionViewDidLoad() {
    //this.problemas = this.problemas;
  }



  escolherProblemas(problema: Problema) {


    // $scope.clicked = function (member) {

    problema.selected = problema.selected === true ? false : true;

    if (problema.selected === true) {
      this.problemasSelecionados.push(problema);
    }
    else {
      this.problemasSelecionados.forEach((item, index) => {
        if (item === problema) this.problemasSelecionados.splice(index, 1);
      });
    }



    // 
    console.log(this.problemasSelecionados);
    // if (index > -1) {
    //   selected.splice(index, 1);
    //   member.selected = false;
    // } else {
    //   selected.push(member);
    //   member.selected = true;
    // }
    // }
  }

  irParaEntrevista() {


    this.usuario.problemas = this.problemasSelecionados;

    this.usuario.Logradouro = 'teste';
    this.usuarioService.update(this.usuario); 

    this.navCtrl.push(PrimeiraEntrevistaPage,
      {
        problema: this.problemasSelecionados,
        usuario: this.usuario
      });

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
