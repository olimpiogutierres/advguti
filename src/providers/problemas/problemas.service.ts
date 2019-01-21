import { EntrevistaService } from './../entrevista/entrevista.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BaseService } from '../base/base.service';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ProblemasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProblemasService extends BaseService {

  public problemas: AngularFirestoreCollection<Problema>;
  constructor(public http: HttpClient, public db: AngularFirestore, public authService: AuthService,
    public entrevistaService: EntrevistaService) {
    super();
    console.log('Hello ProblemasProvider Provider');
  }

  create(problema: Problema): Promise<void> {
    return this.db.doc(`/problemas/`).set(problema).catch(this.handlePromiseError);
  }


  list(dominio: Dominio): Observable<Problema[]> {
    return this.http.get<Problema[]>('http://olimpiogutierres-001-site2.btempurl.com/api/problemas/dominio/' + dominio.id, this.optionsHttp);
  }

}
