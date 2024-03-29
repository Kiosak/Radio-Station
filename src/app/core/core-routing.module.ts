import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';


const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'search', component: CoreComponent },
  { path: 'search/:stationSearch', component: CoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
