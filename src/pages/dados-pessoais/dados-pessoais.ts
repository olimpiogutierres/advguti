import { AssinaturaPage } from './../assinatura/assinatura';
import { UsuarioService } from './../../providers/usuario/usuario.service';
import { Component, Directive } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProcuracaoPage } from '../procuracao/procuracao';
import { Usuario } from '../../models/usuario';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { BrMaskerDirective, BrMaskModel } from 'brmasker-ionic-3';
// import { AssinaturaPage } from '../assinatura/assinatura';
// import { DocumentosPage } from '../documentos/documentos';
// import { FeitoPage } from '../feito/feito';
// import { BrMaskerDirective } from 'brmasker-ionic-3';

@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html'
})
export class DadosPessoaisPage {

  //masks: any='';

  public usuario: Usuario;
  public form: FormGroup;
  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams, public usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.usuario = this.navParams.get('usuario') as Usuario;
    console.log(this.usuario);
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: new FormControl((this.usuario.nome != null ? this.usuario.nome : '')),
      cpf: new FormControl(),
      cep: new FormControl(),
      numero: new FormControl(),
      complemento: new FormControl(),
      logradouro: new FormControl(),
      bairro: new FormControl(),
      cidade: new FormControl(),
      estado: new FormControl(),
      telefone: new FormControl(this.usuario != null ? this.usuario.telefone : ''),
      email: new FormControl(this.usuario != null ? this.usuario.email : '')
    });




  }
  goToProcuracao() {
    var id: number = Number(this.usuario.id);
    this.usuario = this.form.value;
    this.usuario.id = String(id);
    // this.usuarioService.update(this.usuario);
    // console.log(this.usuario);
    this.usuarioService.update(this.usuario);
    this.navCtrl.push(AssinaturaPage, { usuario: this.usuario });
  }

  buscarCEP() {

    if (!isNaN(Number(this.form.value.cep))) {


      if (this.form.value.cep.length != 8)
        return;

      var headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');
      headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');


      this.http.get(`https://viacep.com.br/ws/${this.form.value.cep}/json/`, { headers: headers })
        .subscribe((data: any) => {
          this.form.patchValue({ logradouro: data.logradouro, bairro: data.bairro, cidade: data.localidade, estado: data.uf });
        }, error => {
          this.form.patchValue({ logradouro: '', bairro: '', cidade: '', estado: '' });
        });
    }
  }
}
