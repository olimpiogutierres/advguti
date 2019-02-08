import { UsuarioService } from './../../providers/usuario/usuario.service';
import { EntrevistaService } from './../../providers/entrevista/entrevista.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrimeiraEntrevistaPage } from '../primeira-entrevista/primeira-entrevista';
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
  }

  ionViewDidLoad() {

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

  irParaEntrevista() {


    // this.usuario.problemas = this.problemasSelecionados;

    this.usuario.usuarioProblema = [];
    for (let a of this.problemasSelecionados) {

      let b: UsuarioProblema = {} as UsuarioProblema;
      b.IdProblema = parseInt(a.id);
      b.IdUsuario = parseInt(this.usuario.id);
      this.usuario.usuarioProblema.push(b);
      this.usuarioService.inserirProblemaUsuario(b).subscribe((d: UsuarioProblema) => { console.log('ddddd', d) });

    }



    // for (let entry of this.problemasSelecionados) {
    //   console.log(entry.id, entry.id);
    //   console.log('element', entry);
    //   let up: any = {};
    //   up.idProblema = entry.id;
    //   up.idUsuario = this.usuario.id;
    //   console.log('up', up);

    //   // var a: UsuarioProblema = new UsuarioProblema();

    //   // console.log(a);

    // }


    this.usuario.Logradouro = 'teste';

    // console.log('JSON.stringify(this.usuario)', JSON.stringify(this.usuario));

    this.usuarioService.update(this.usuario);

    console.log('PrimeiraEntrevistaPage', this.usuario);

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
