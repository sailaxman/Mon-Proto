import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent }    from './not-found.component';
import { ContentModule }  from './server/content/content.module';
import { ServerModule } from './server/server.module';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './login/auth-guard.service'
export const ROUTES: Routes = [
   {
    path: 'home',
    component: HomeComponent
  },
   {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
   },
  {
    path: 'servers',
    loadChildren: 'app/servers/server.module#ServerModule',
    canActivateChild: [AuthGuard]
  }
];
