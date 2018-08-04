import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickMunchHomePage } from './quick-munch-home';

@NgModule({
  declarations: [
    QuickMunchHomePage,
  ],
  imports: [
    IonicPageModule.forChild(QuickMunchHomePage),
  ],
})
export class QuickMunchHomePageModule {}
