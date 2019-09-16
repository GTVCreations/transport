import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookComponent } from './component/book/book.component';
import { CheckComponent } from './component/check/check.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book', component: BookComponent },
  { path: 'check', component: CheckComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [DashboardComponent, BookComponent, CheckComponent, PagenotfoundComponent];
