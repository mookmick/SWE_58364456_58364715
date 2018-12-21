import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { homeComponent } from './home/home.component';
import { featureComponent } from './feature/feature.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'home',component:homeComponent},
  {path:'feature',component:featureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

const routes: Routes = [];
