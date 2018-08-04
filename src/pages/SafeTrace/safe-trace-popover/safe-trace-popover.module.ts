import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafeTracePopoverPage } from './safe-trace-popover';

@NgModule({
  declarations: [
    SafeTracePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(SafeTracePopoverPage),
  ],
})
export class SafeTracePopoverPageModule {}
