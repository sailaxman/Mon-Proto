import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent }    from './not-found.component';

const appRoutes: Routes = [
  {
    path: 'server',
    loadChildren: 'app/servers/server.module#ServerModule',
  },
  {
    path: 'server/:serverName',
    loadChildren: 'app/content/content.module#ContentModule',
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }