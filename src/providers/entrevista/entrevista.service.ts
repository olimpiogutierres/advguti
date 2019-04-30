import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { s } from '@angular/core/src/render3';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { BaseService } from '../base/base.service';

/*
  Generated class for the EntrevistaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EntrevistaService extends BaseService {

  // constructor(public http: HttpClient, public db: AngularFirestore) {
  //   console.log('Hello EntrevistaProvider Provider');
  // }

  items: Observable<Entrevista[]>;
  countItems = 0;
  constructor(public http: HttpClient, public authService: AuthService) {
    super();
    // this.itemsCollection = this.db.collection('entrevista');
    // this.items = this.itemsCollection.valueChanges();
    // this.items = this.itemsCollection.snapshotChanges()
    //   .map(changes => {
    //     return changes.map(a => {
    //       const data = a.payload.doc.data();
    //       data.id = a.payload.doc.id;
    //       return data;
    //     })
    //   });

    //console.log('Entrevistaitems', this.items);

  }



  // list(): Observable<Entrevista[]> {
  //   this.itemsCollection = this.db.collection('entrevista');
  //   this.items = this.itemsCollection.valueChanges();

  //   // this.items = this.itemsCollection.snapshotChanges()
  //   //   .map(changes => {
  //   //     return changes.map(a => {
  //   //       const data = a.payload.doc.data();
  //   //       data.id = a.payload.doc.id;
  //   //       return data;
  //   //     })
  //   //   });

  //   return this.items;
  // }


}
