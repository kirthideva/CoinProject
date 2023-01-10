import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinlistComponent } from './coinlist/coinlist.component';
import { CreateCoinComponent } from './create-coin/create-coin.component';

const routes: Routes = [{
  path:"coinlist", component :CoinlistComponent
},{
  path:"",redirectTo:"/coinlist",pathMatch:"full"
},{
path:"create-coin",component:CreateCoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
