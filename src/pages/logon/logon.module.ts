import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogonPage } from './logon';

@NgModule({
  declarations: [
    LogonPage,
  ],
  imports: [
    IonicPageModule.forChild(LogonPage),
  ],
})
export class LogonPageModule {}
