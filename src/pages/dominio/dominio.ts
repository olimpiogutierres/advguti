import { ProblemasService } from './../../providers/problemas/problemas.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './../../providers/usuario/usuario.service';
import { Usuario } from './../../models/usuario';

import { ProblemaPage } from '../problema/problema';
import { DominioService } from '../../providers/dominio/dominio.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { d } from '@angular/core/src/render3';

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
    private dominioService: DominioService, private usuarioService: UsuarioService,
    private problemasService: ProblemasService, public appCtrl: App
  ) {
    this.dominioService.list().subscribe((d: Dominio[]) => {
      this.dominios = d;
     // console.log(this.dominios);

    });
  }

  public dominios: Dominio[];
  private dominioSelecionado: Dominio = null;

  ionViewDidLoad() {

    


    this.dominioService.list().subscribe(((d: Dominio[]) => {
      this.dominios = d;

      this.goToProblema(this.dominios.filter(d => d.id == 1)[0]);
    }));




  }

  public goToProblema(dominio: Dominio) {

    let usuario: Usuario = this.navParams.data as Usuario;

    // usuario.entrou = 1;
    // this.usuarioService.create(usuario);



   // console.log('this.usuarioService.getKeys;', dominio);

    //usuario.dominio = dominio;

    //this.usuarioService.update(usuario);

    

    usuario.idDominioSelecionado = dominio.id;

    //console.log('usuario.idDominioSelecionado', usuario.idDominioSelecionado);
    this.navCtrl.push(ProblemaPage, {
      problema: dominio.problema,
      usuario: usuario
    });


    // this.problemasService.list(dominio).subscribe((data: Problema[]) => {
    //   this.navCtrl.push(ProblemaPage, {
    //     problema: data,
    //     usuario: usuario
    //   });
    // });


  }


  goToProblemas() {
    this.appCtrl.getRootNav().setRoot(ProblemaPage, this.dominioSelecionado);
    // this.navCtrl.getRootNav().setRoot(ProblemaPage, this.dominioSelecionado);
  }
}
