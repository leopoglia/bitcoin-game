import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmComponent } from './um/um.component';
import { TempoComponent } from './tempo/tempo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UmComponent, TempoComponent]
})
export class FasesModule { }
