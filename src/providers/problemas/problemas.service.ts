import { EntrevistaService } from './../entrevista/entrevista.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BaseService } from '../base/base.service';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Dominio } from '../../models/dominio';


/*
  Generated class for the ProblemasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProblemasService extends BaseService {

  constructor(public http: HttpClient, public authService: AuthService,
    public entrevistaService: EntrevistaService) {
    super();
    console.log('Hello ProblemasProvider Provider');
  }




  list(dominio: Dominio): Observable<Problema[]> {

    console.log('list dominio', dominio);


    return this.http.get<Problema[]>(this.api + '/problemas/dominio/' + dominio.id, this.optionsHttp);
  }

}
