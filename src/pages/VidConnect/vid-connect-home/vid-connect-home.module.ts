import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VidConnectHomePage } from './vid-connect-home';

@NgModule({
  declarations: [
    VidConnectHomePage,
  ],
  imports: [
    IonicPageModule.forChild(VidConnectHomePage),
  ],
})
export class VidConnectHomePageModule {}
