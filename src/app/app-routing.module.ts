import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PromotionComponent} from "./promotion/promotion.component";
import {CallToActionComponent} from "./call-to-action/call-to-action.component";

const routes: Routes = [
  /**Estos paths son los comunes**/
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'promotion', component: PromotionComponent},
  {path: 'call-to-action', component: CallToActionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
