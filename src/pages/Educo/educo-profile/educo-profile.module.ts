import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducoProfilePage } from './educo-profile';

@NgModule({
  declarations: [
    EducoProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(EducoProfilePage),
  ],
})
export class EducoProfilePageModule {}
