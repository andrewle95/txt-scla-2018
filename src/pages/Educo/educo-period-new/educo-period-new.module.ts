import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducoPeriodNewPage } from './educo-period-new';

@NgModule({
  declarations: [
    EducoPeriodNewPage,
  ],
  imports: [
    IonicPageModule.forChild(EducoPeriodNewPage),
  ],
})
export class EducoPeriodNewPageModule {}
