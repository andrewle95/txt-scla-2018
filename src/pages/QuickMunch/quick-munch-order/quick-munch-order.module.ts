import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickMunchOrderPage } from './quick-munch-order';

@NgModule({
  declarations: [
    QuickMunchOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickMunchOrderPage),
  ],
})
export class QuickMunchOrderPageModule {}
