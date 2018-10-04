import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './../../providers/usuario/usuario.service';
import { Usuario } from './../../models/usuario';

import { ProblemaPage } from '../problema/problema';
import { DominioService } from '../../providers/dominio/dominio.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the DominioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-dominio',
  templateUrl: 'dominio.html',
})
export class DominioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dominioService: DominioService, private usuarioService: UsuarioService
  ) {
    this.dominioService.list().subscribe((d: Dominio[]) => {
      this.dominios = d;
      console.log(this.dominios);

    });
  }

  public dominios: Dominio[];
  private dominioSelecionado: Dominio = null;

  ionViewDidLoad() {

    console.log('did load');


    this.dominioService.list().subscribe(((d: Dominio[]) => {
      this.dominios = d;
    }));

// this.dominios = this.http.get('https://webapplicationadvogados.azurewebsites.net/api/dominios')
// .subscribe((data:List<Dominio>) => {
//   this.data = data;
//   resolve(this.data);
// });


  }

  public goToProblema(dominio: Dominio) {

    let usuario: Usuario = this.navParams.data as Usuario;
    // usuario.entrou = 1;
    // this.usuarioService.create(usuario);



    console.log('this.usuarioService.getKeys;', dominio);

    //usuario.dominio = dominio;

    this.usuarioService.create(usuario);


    this.navCtrl.push(ProblemaPage, usuario);
  }


  goToProblemas() {
    this.navCtrl.push(ProblemaPage, this.dominioSelecionado);
  }
}
