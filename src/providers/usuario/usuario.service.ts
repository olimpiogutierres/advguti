import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '../../../node_modules/angularfire2/firestore';
import { Usuario } from '../../models/usuario';
import { Observable } from '../../../node_modules/rxjs';
import { DocumentSnapshot } from '@firebase/firestore-types';
import { UsuarioResposta } from '../../models/usuarioresposta';
import { UsuarioDocumento } from '../../models/usuariodocumento';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioService extends BaseService {

  public usuariosCollection: AngularFirestoreCollection<any>;
  public items: Observable<any[]>;
  countItems: number;
  constructor(public http: HttpClient, private db: AngularFirestore) {
    super();

    this.list();
    console.log('Hello UsuarioProvider Provider');
  }



  list(): Observable<Usuario[]> {
    this.usuariosCollection = this.db.collection('usuario');
    this.items = this.usuariosCollection.valueChanges();

    return this.items;
  }

  public update(usuario: Usuario): void {

    console.log('usuarioalter', usuario);
    this.optionsHttp.body = { usuario };

    this.http.post<Usuario>(this.api + '/usuarios/', usuario, { headers: this.optionsHttp.headers }).subscribe(d => console.log('problema', d));


  }

  public atualizar(usuario: Usuario): void {

    console.log('usuarioalter', usuario);
    this.optionsHttp.body = { usuario };

    this.http.put<Usuario>(this.api + '/usuarios/' + usuario.id, usuario, { headers: this.optionsHttp.headers }).subscribe(d => console.log('problema', d));


  }

  public inserirProblemaUsuario(usuario: UsuarioProblema): Observable<UsuarioProblema> {
    return this.http.post<UsuarioProblema>(this.api + '/UsuarioProblemas/', usuario, { headers: this.optionsHttp.headers });
  }

  public inserirRespostaUsuario(usuario: UsuarioResposta) {
    this.http.post<UsuarioResposta>(this.api + '/UsuarioRespostas/', usuario, { headers: this.optionsHttp.headers }).subscribe(d => console.log('resposta', d));
  }

  public create(usuario: Usuario): Observable<Usuario> {

    this.optionsHttp.body = { usuario };

    console.log('usuariocreate', usuario);

    return this.http.post<Usuario>(this.api + '/usuarios/', usuario, { headers: this.optionsHttp.headers });

  }

  public inserirDocumentos(usuarioDocumento: UsuarioDocumento) {
    this.optionsHttp.body = { usuarioDocumento };

    console.log(JSON.stringify(usuarioDocumento));

    return this.http.post<UsuarioDocumento>(this.api + '/UsuarioDocumento/', usuarioDocumento, { headers: this.optionsHttp.headers })
      .subscribe((data) => { console.log(data) });
  }

}
