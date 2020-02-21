import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { LogoutComponent } from './logout/logout.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DeletepageComponent } from './deletepage/deletepage.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    AddprojectComponent,
    ProjectdetailsComponent,
    LogoutComponent,
    DeletepageComponent,
    UpdatepageComponent,

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[ProjectdetailsComponent,UpdatepageComponent       
          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
