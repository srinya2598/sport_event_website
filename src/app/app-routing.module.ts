import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './dashboard/components/home/home.component';
import {FacebookComponent} from './dashboard/components/facebook/facebook.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'facebook',
    component: FacebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
