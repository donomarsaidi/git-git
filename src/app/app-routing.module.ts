import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';

const routes: Routes = [
  {path:"adduser" , component:AdduserComponent},
  {path:"searchuser" , component:SearchuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
