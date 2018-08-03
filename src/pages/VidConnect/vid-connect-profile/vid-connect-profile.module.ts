import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VidConnectProfilePage } from './vid-connect-profile';

@NgModule({
  declarations: [
    VidConnectProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(VidConnectProfilePage),
  ],
})
export class VidConnectProfilePageModule {}
