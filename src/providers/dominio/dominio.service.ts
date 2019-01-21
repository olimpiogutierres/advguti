import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service';
import { BaseService } from '../base/base.service';
import { AngularFireObject } from 'angularfire2/database';


/*
  Generated class for the DominioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DominioService extends BaseService {

  public api: string = 'http://olimpiogutierres-001-site2.btempurl.com/api/dominios/';
  // public api: string = 'http://olimpiogutierres-001-site2.btempurl.com/api/dominios/';
  public dominioCollection: AngularFirestoreCollection<Dominio>;
  items: Observable<Dominio[]>;
  // public items: Observable<{}[]>; // read collection
  constructor(public http: HttpClient, public db: AngularFirestore, public authService: AuthService) {
    super();

  }

  create(dominio: Dominio): Promise<void> {
    return this.db.doc(`/dominio/`).set(dominio).catch(this.handlePromiseError);
  }

  get(nome: string): AngularFirestoreDocument<Dominio> {
    return this.db.doc(`/dominio/${nome}`);
  }




  list(): Observable<Dominio[]> {
    return this.http.get<Dominio[]>(this.api, this.optionsHttp);
  }

}

