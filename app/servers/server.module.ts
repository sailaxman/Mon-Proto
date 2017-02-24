import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ServerListComponent }    from './server-list.component';
import { ServerComponent }  from './server.component';
import {MaterialModule} from '@angular/material';
import {MdSidenav} from '@angular/material'
import {MdSidenavContainer, MdSidenavModule} from '@angular/material'
import { ServerRoutingModule } from './server-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServerRoutingModule, MaterialModule.forRoot()
  ],
  declarations: [
    ServerListComponent,
    ServerComponent
  ]
})
export class ServerModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/