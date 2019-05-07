import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';
import { CompanhiaAerea } from '../../models/companhiaaerea';

@Injectable()
export class PerguntaService extends BaseService {

  items: Observable<Pergunta[]>;
  constructor(public http: HttpClient) {
    super();
    //console.log('Hello PerguntaProvider Provider');
  }



  list(problema: Problema): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(this.api + '/problemas/perguntas/' + problema.id, this.optionsHttp);
  }


  listCompanhiasAereas(): Observable<CompanhiaAerea[]> {
    return this.http.get<CompanhiaAerea[]>(this.api + '/CompanhiaAereas/', this.optionsHttp);
  }



  // listProblemasComuns(idDominio: number): Observable<Pergunta[]> {


  //   this.http.get<Pergunta[]>(this.api + '/subproblemas/', this.optionsHttp).subscribe((Pergunta:));


  //   return a;
  // }

}
