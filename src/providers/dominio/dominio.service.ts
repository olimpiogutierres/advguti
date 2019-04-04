import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  items: Observable<Dominio[]>;
  // public items: Observable<{}[]>; // read collection
  constructor(public http: HttpClient, public authService: AuthService) {
    super();

  }






  list(): Observable<Dominio[]> {
    return this.http.get<Dominio[]>(this.api + '/dominios', this.optionsHttp);
  }

}

