import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmComponent } from './um/um.component';
import { TempoComponent } from './tempo/tempo.component';
import { DoisComponent } from './dois/dois.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UmComponent, TempoComponent, DoisComponent]
})
export class FasesModule { }
