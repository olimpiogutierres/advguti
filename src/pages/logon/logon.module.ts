import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogonPage } from './logon';
// import { LoginPage } from './login';
@NgModule({
  declarations: [
    LogonPage,
    // LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LogonPage),
  ],
})
export class LogonPageModule {}
