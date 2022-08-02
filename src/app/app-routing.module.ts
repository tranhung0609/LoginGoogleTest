import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SocialLoginComponent} from "./social-login/social-login.component";

const routes: Routes = [
  {
    path: '',
    component: SocialLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
