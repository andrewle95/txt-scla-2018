import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleStopHomePage } from './simple-stop-home';

@NgModule({
  declarations: [
    SimpleStopHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SimpleStopHomePage),
  ],
})
export class SimpleStopHomePageModule {}
