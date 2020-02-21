import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { DeletepageComponent } from './deletepage/deletepage.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';



const routes: Routes = [
  { path:'', component:HomeComponent},
{path:'registration', component:RegistrationComponent },
{path:'addproject', component:AddprojectComponent },
{path:'projectdetails', component:ProjectdetailsComponent },
{path:'deletepage', component:DeletepageComponent },
{path:'updatepage', component:UpdatepageComponent },
{path:'updatepage/:Title', component:UpdatepageComponent},
{path:'deletepage/:Title', component:DeletepageComponent},
];

export const appRoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
