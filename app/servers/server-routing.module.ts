import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServerListComponent }    from './server-list.component';
import { ServerComponent }  from './server.component';

const serverRoutes: Routes = [
  { path: 'server/:serverName', component: ServerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(serverRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServerRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/