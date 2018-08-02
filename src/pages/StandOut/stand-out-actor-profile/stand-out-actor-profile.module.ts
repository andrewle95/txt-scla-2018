import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StandOutActorProfilePage } from './stand-out-actor-profile';

@NgModule({
  declarations: [
    StandOutActorProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(StandOutActorProfilePage),
  ],
})
export class StandOutActorProfilePageModule {}
