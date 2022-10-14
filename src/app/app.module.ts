import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SiginupComponent } from './siginup/siginup.component';
import { RouterModule ,Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes:Routes=[
  {
    path:"",component:SigninComponent
  },
  {
    path:"signup",component:SiginupComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SiginupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
