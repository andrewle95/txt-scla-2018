import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafeTraceModalPage } from './safe-trace-modal';

@NgModule({
  declarations: [
    SafeTraceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SafeTraceModalPage),
  ],
})
export class SafeTraceModalPageModule {}
