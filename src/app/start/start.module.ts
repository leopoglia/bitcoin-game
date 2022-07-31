import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InitialComponent } from './initial/initial.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InitialComponent, LoginComponent]
})
export class StartModule { }
