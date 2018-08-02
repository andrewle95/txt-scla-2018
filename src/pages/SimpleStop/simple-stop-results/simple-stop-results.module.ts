import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleStopResultsPage } from './simple-stop-results';

@NgModule({
  declarations: [
    SimpleStopResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(SimpleStopResultsPage),
  ],
})
export class SimpleStopResultsPageModule {}
