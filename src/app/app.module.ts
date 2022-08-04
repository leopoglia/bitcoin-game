import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InitialComponent } from './start/initial/initial.component';
import { UmComponent } from './fases/um/um.component';
import { LoginComponent } from './start/login/login.component';
import { RankingComponent } from './start/ranking/ranking.component';
import { TempoComponent } from './fases/tempo/tempo.component';
import { DoisComponent } from './fases/dois/dois.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InitialComponent },
  { path: 'ranking', component: RankingComponent },
  {
    path: 'fase', children: [
      { path: '1', component: UmComponent },
      { path: '2', component: DoisComponent }
    ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    UmComponent,
    DoisComponent,
    LoginComponent,
    RankingComponent,
    TempoComponent

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


