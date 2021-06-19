import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { WildcardRouteComponent } from './wildcard-route/wildcard-route.component';

const appRoutes: Routes = [
  { path: 'hero-list', component: HeroListComponent },
  { path: 'crisis-list', component: CrisisListComponent },
  { path: '', component: HeroListComponent },
  { path: '**', component: WildcardRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
