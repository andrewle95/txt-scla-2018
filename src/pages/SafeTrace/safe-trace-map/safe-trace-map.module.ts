import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafeTraceMapPage } from './safe-trace-map';

@NgModule({
  declarations: [
    SafeTraceMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SafeTraceMapPage),
  ],
})
export class SafeTraceMapPageModule {}
