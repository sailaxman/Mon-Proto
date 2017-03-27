import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ServerListComponent }  from './server-list.component';
import { ServerComponent }  from './server/server.component';
import { ServerNavComponent }  from './server/server-navigation/server-nav.component';
import { RouterModule } from '@angular/router';
import { routes } from './server.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ServerListComponent, ServerComponent, ServerNavComponent
  ],
  exports: [ ServerListComponent, ServerComponent, ServerNavComponent ]
})
export class ServerModule {
  public static routes = routes;
}
