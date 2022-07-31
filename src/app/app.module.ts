import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InitialComponent } from './start/initial/initial.component';
import { UmComponent } from './fases/um/um.component';
import { LoginComponent } from './start/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InitialComponent},
  {
    path: 'fase', children: [
      { path: '1', component: UmComponent }]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    UmComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { 


}


