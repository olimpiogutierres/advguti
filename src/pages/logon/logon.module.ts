import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogonPage } from './logon';
import { BrMaskerModule } from 'br-mask';
// import { LoginPage } from './login';
@NgModule({
  declarations: [
    LogonPage,
    // LoginPage,
  ],
  imports: [//BrMaskerModule,
    IonicPageModule.forChild(LogonPage),
  ],
})
export class LogonPageModule {}
