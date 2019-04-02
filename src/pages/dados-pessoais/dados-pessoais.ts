import { UsuarioService } from './../../providers/usuario/usuario.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProcuracaoPage } from '../procuracao/procuracao';
import { Usuario } from '../../models/usuario';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { AssinaturaPage } from '../assinatura/assinatura';
// import { DocumentosPage } from '../documentos/documentos';
// import { FeitoPage } from '../feito/feito';

@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html'
})
export class DadosPessoaisPage {

  public usuario: Usuario;
  public form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.usuario = this.navParams.get('usuario') as Usuario;
    console.log(this.usuario);

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: new FormControl(),
      cpf: new FormControl(),
      cep: new FormControl(),
      numero: new FormControl(),
      complemento: new FormControl(),
      telefone: new FormControl(),
      email: new FormControl()
    });

    // this.user = this.userService.loadUser();

  }
  goToProcuracao() {
    var id: number = Number(this.usuario.id);
    this.usuario = this.form.value;
    this.usuario.id = String(id);
    // this.usuarioService.update(this.usuario);
    console.log(this.usuario);
    this.usuarioService.atualizar(this.usuario);
    this.navCtrl.push(ProcuracaoPage);
  }
}
