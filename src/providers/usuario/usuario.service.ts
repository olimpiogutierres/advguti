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

  public create(usuario: Usuario): Promise<void> {
    let a;
    // if (usuario.id == null)
    //   a = this.usuariosCollection.add(usuario).then((documentSnapshot) => {
    //     usuario.id = documentSnapshot.id;
    //   }).catch(this.handlePromiseError);

    // else
    // a = this.usuariosCollection.

    usuario.id = this.db.createId();
    console.log('usuarioidcreated',usuario.id);
    if (usuario.id == null) {
      a = this.usuariosCollection.add(usuario).then((documentSnapshot) => {
        usuario.id = documentSnapshot.id;
      }).catch(this.handlePromiseError);
    }
    else {

      a = this.usuariosCollection.doc(`${usuario.id}`)
        .set({ usuario })
        .then(() => { console.log('deu certo') })
        .catch((error) => {
          console.log('deu erro')
          // console.log('Error updating user', error); // (document does not exists)
          // this.db.collection('usuario').doc(`${usuario.id}`)
          //   .set({ usuario });
        });
      // this.items.subscribe((d: Usuario[]) => { console.log(d) });
      // usuario.id = this.db.createId();    
    }
    console.log('usuarioid', usuario);
    return a;
  }
  public update(game) {
    return this.usuariosCollection.doc(game.$key).update(game);
  }

  // public update(usuario: Usuario): Promise<void> {
  //   return this.db.collection('usuario').get().
  // }





}
