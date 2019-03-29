import { UsuarioService } from './../../providers/usuario/usuario.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProcuracaoPage } from '../procuracao/procuracao';
import { Usuario } from '../../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AssinaturaPage } from '../assinatura/assinatura';
// import { DocumentosPage } from '../documentos/documentos';
// import { FeitoPage } from '../feito/feito';

@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html'
})
export class DadosPessoaisPage {

  public usuario: Usuario;
  public  form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.usuario = this.navParams.get('usuario') as Usuario;
    console.log(this.usuario);

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      cpf: ['', Validators.required],
      about: []
    });

    // this.user = this.userService.loadUser();

  }
  goToProcuracao() {
    // this.usuarioService.update(this.usuario);
    this.navCtrl.push(ProcuracaoPage);
  }
}
