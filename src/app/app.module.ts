import { ProgressBarComponent } from './../components/progress-bar/progress-bar';
import { HeaderPrincipalComponent } from './../components/header-principal/header-principal';
import { AdminProblemasPage } from './../pages/admin-problemas/admin-problemas';
// import { PerguntaService } from './../providers/pergunta/pergunta.service';
import { EntrevistaService } from './../providers/entrevista/entrevista.service';
import { UsuarioService } from './../providers/usuario/usuario.service';

import { DominioPage } from '../pages/dominio/dominio';
import { DominioService } from '../providers/dominio/dominio.service';
import { ProblemasService } from '../providers/problemas/problemas.service';
import { LogonPage } from '../pages/logon/logon';
import { MyFilterPipe } from '../pipes/filter.pipe';

import { ProcuracaoPage } from '../pages/procuracao/procuracao';
import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Header } from 'ionic-angular';
import { MyApp } from './app.component';
import { CompanhiaPage } from '../pages/companhia/companhia';
import { ProblemaPage } from '../pages/problema/problema';
import { PrimeiraEntrevistaPage } from '../pages/primeira-entrevista/primeira-entrevista';
import { OutrosProblemasPage } from '../pages/outros-problemas/outros-problemas';
import { DadosPessoaisPage } from '../pages/dados-pessoais/dados-pessoais';

import { AssinaturaPage } from '../pages/assinatura/assinatura';
import { DocumentosPage } from '../pages/documentos/documentos';
import { FeitoPage } from '../pages/feito/feito';
import { HttpClientModule } from '@angular/common/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Pro } from '@ionic/pro';
// import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { FirebaseAppConfig } from 'angularfire2';
import { BaseService } from '../providers/base/base.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AuthService } from '../providers/auth/auth.service';
import { PerguntaService } from '../providers/pergunta/pergunta.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RespostaService } from '../providers/resposta/resposta.service';
// import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
// import { ComponentsModule } from '../components/components.module';
import { SignaturePadModule } from 'angular2-signaturepad';

// import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/database';
// import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SignaturePage } from "../pages/assinatura/signature";
import { Camera } from '@ionic-native/camera';

Pro.init('f07c10f1', {
  appVersion: '1'
})

const firebaseAppConfig: FirebaseAppConfig = {
  // apiKey: "AIzaSyDxXarH2mUPXXHXiCpWEx_JAH6tTVxU_zk",
  // authDomain: "ionic2-firebase-chat-c98bd.firebaseapp.com",
  // databaseURL: "https://ionic2-firebase-chat-c98bd.firebaseio.com",
  // storageBucket: "ionic2-firebase-chat-c98bd.appspot.com",
  // messagingSenderId: "1047752270485"
  apiKey: "AIzaSyBP2b2FFcEHoOd6aqEpbZWgVYYXGu9bR_M",
  authDomain: "projetoadvogado-f8501.firebaseapp.com",
  databaseURL: "https://projetoadvogado-f8501.firebaseio.com",
  projectId: "projetoadvogado-f8501",
  storageBucket: "projetoadvogado-f8501.appspot.com",
  messagingSenderId: "98843321259"
}

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    CompanhiaPage,
    ProblemaPage,
    PrimeiraEntrevistaPage,
    OutrosProblemasPage,
    DadosPessoaisPage,
    ProcuracaoPage,
    AssinaturaPage,
    DocumentosPage,
    FeitoPage,
    MyFilterPipe, LogonPage, DominioPage,
    AdminProblemasPage,
    // ProgressBarComponent,
    // CustomHeaderComponent,
    HeaderPrincipalComponent,
    ProgressBarComponent,
    SignaturePage

  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseAppConfig),
    //ComponentsModule,

    IonicModule.forRoot(MyApp),
    // IonicModule.forRoot(HeaderPrincipalComponent),
    ReactiveFormsModule,
    SignaturePadModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    CompanhiaPage,
    ProblemaPage,
    PrimeiraEntrevistaPage,
    OutrosProblemasPage,
    DadosPessoaisPage,
    ProcuracaoPage,
    AssinaturaPage,
    DocumentosPage,
    FeitoPage,
    LogonPage,
    DominioPage,
    AdminProblemasPage,
    HeaderPrincipalComponent,
    SignaturePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    IonicErrorHandler,
    [{ provide: ErrorHandler, useClass: MyErrorHandler }],
    HttpClientModule,
    // IonicsignaturepadProvider,
    DominioService,
    ProblemasService,
    AuthService,
    UsuarioService,
    EntrevistaService,
    PerguntaService,
    RespostaService,
    Camera
    // AuthProvider
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
