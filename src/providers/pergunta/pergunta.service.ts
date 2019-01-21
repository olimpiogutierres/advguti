import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Platform } from 'ionic-angular';

/*
  Generated class for the PerguntaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerguntaService extends BaseService {

  public itemsCollection: AngularFirestoreCollection<Pergunta>;
  items: Observable<Pergunta[]>;
  constructor(public http: HttpClient, public db: AngularFirestore) {
    super();
    console.log('Hello PerguntaProvider Provider');
  }

  // list(entrevista: Entrevista): Observable<Pergunta[]> {
  //   this.itemsCollection = this.db.collection('pergunta',
  //     ref => ref.where('identrevista', '==', entrevista.id));

  //   //this.items = this.mapListKeys(this.itemsCollection);


  //   return this.items;
  // }


  list(problema: Problema): Observable<Pergunta[]> {
    console.log('http://olimpiogutierres-001-site2.btempurl.com/api/problemas/perguntas/' + problema.id);


    return this.http.get<Pergunta[]>('http://olimpiogutierres-001-site2.btempurl.com/api/problemas/perguntas/' + problema.id, this.optionsHttp);
  }

}
