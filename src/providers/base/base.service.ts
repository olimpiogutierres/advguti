
// import { User } from './../models/user.model';
// import { UserService } from './user/user.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



const extractError = (error: Response | any): string => {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);

    return errMsg;
}

export abstract class BaseService {

    constructor() {

        this.headers = new HttpHeaders();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.headers.append('Accept', 'application/json');
        this.headers.append('content-type', 'application/json');
        this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');


        this.optionsHttp = { headers: this.headers, body: null };
    }

    private headers: HttpHeaders;
    public optionsHttp: { headers: {}, body: {} };

    // public api: string = 'https://www.semvoo.com.br/ws/api';
    public api: string = 'http://localhost:18092/api'; 

 


    protected handlePromiseError(error: Response | any): Promise<any> {
        return Promise.reject(extractError(error));
    }

    protected handleObservableError(error: Response | any): Observable<any> {
        return Observable.throw(extractError(error));
    }

    // mapListKeys<T>(list: AngularFirestoreCollection<T>): Observable<T[]> {
    //     return list
    //         .snapshotChanges()
    //         .map(actions => actions.map(action => ({ $key: action.key, ...action.payload.doc.data() })));
    // }

    // mapListKeysType<T>(list: AngularFirestoreCollection<T>): T[] {


    //     let a: T[];
    //     list.snapshotChanges()
    //         .map(actions => actions.map(action => ({ $key: action.payload.newIndex, ...action.payload.doc.get() })))
    //         .subscribe((data) => {
    //             a = data;
    //         });

    //     return a;
    // }




    // mapObjectKey<T>(object: AngularFirestoreDocument<T>): Observable<T> {
    //     return object
    //         .snapshotChanges()
    //         .map(action => ({ $key: action.payload.id, ...action.payload.data('') }));
    // }

    // mapObjectKeyType<T>(object: AngularFirestoreDocument<T>): T {
    //     let a: T;
    //     object.snapshotChanges()
    //         .map(action => ({ $key: action.payload.id, ...action.payload.data() }))
    //         .subscribe(data => { data });
    //     return
    // }


}
