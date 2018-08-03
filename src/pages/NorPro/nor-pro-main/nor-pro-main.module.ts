import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NorProMainPage } from './nor-pro-main';

@NgModule({
  declarations: [
    NorProMainPage,
  ],
  imports: [
    IonicPageModule.forChild(NorProMainPage),
  ],
})
export class NorProMainPageModule {}
