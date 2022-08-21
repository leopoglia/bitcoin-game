import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmComponent } from './um/um.component';
import { TempoComponent } from './tempo/tempo.component';
import { DoisComponent } from './dois/dois.component';
import { TresComponent } from './tres/tres.component';
import { QuatroComponent } from './quatro/quatro.component';
import { CincoComponent } from './cinco/cinco.component';
import { SeisComponent } from './seis/seis.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UmComponent, TempoComponent, DoisComponent, TresComponent, QuatroComponent, CincoComponent, SeisComponent]
})
export class FasesModule { }
