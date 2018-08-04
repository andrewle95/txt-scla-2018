import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickMunchVendorPage } from './quick-munch-vendor';

@NgModule({
  declarations: [
    QuickMunchVendorPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickMunchVendorPage),
  ],
})
export class QuickMunchVendorPageModule {}
