import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home-page/home/home.component';
import { AppsComponent } from '../apps-page/apps/apps.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apps', component: AppsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
