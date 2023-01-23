import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: HomePageComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(() => redirectLoggedInTo(['/dashboard'])),
  },
  {
    path: 'register',
    component: RegisterComponent,
    ...canActivate(() => redirectLoggedInTo(['/dashboard'])),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
