import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TunnelsGamePage } from './tunnels-game';

@NgModule({
  declarations: [
    TunnelsGamePage,
  ],
  imports: [
    IonicPageModule.forChild(TunnelsGamePage),
  ],
})
export class TunnelsGamePageModule {}
