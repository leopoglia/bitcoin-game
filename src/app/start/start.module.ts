import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InitialComponent } from './initial/initial.component';
import { LoginComponent } from './login/login.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InitialComponent, LoginComponent, RankingComponent]
})
export class StartModule { }
