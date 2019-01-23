import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '../../../node_modules/angularfire2/firestore';
import { Usuario } from '../../models/usuario';
import { Observable } from '../../../node_modules/rxjs';
import { DocumentSnapshot } from '@firebase/firestore-types';

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

    this.http.post<Usuario>('http://olimpiogutierres-001-site2.btempurl.com/api/usuarios/', usuario, { headers: this.optionsHttp.headers });


  }

  public inserirProblemaUsuario(usuario: UsuarioProblema): Observable<UsuarioProblema> {
    console.log('UsuarioProblema', usuario);
    return this.http.post<UsuarioProblema>('http://olimpiogutierres-001-site2.btempurl.com/api/UsuarioProblemas/', usuario, { headers: this.optionsHttp.headers });
  }

  public create(usuario: Usuario): Observable<Usuario> {


    this.optionsHttp.body = { usuario };



    console.log('usuariocreate', usuario);

    return this.http.post<Usuario>('http://olimpiogutierres-001-site2.btempurl.com/api/usuarios/', usuario, { headers: this.optionsHttp.headers });






  }




}
