import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TunnelsHomePage } from './tunnels-home';

@NgModule({
  declarations: [
    TunnelsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TunnelsHomePage),
  ],
})
export class TunnelsHomePageModule {}
