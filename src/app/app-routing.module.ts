import { DeleteuserbynameComponent } from './deleteuserbyname/deleteuserbyname.component';
import { GetuserbyidComponent } from './getuserbyid/getuserbyid.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserComponent } from './user/user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path :'user', component:UserComponent},
  {path:'adduser', component:AdduserComponent},
  {path:'userbyid',component:GetuserbyidComponent},
  {path:'deletebyname', component:DeleteuserbynameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
