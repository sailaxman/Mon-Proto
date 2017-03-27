import { ServerListComponent }  from './server-list.component';
import { ServerComponent }  from './server/server.component';
export const routes = [
  { path: '', component: ServerListComponent, children: [
      { path: ':serverName', component: ServerComponent, children: [
            { path: ':content', loadChildren: './server/content#ContentModule' }
          ] 
      }
    ] 
  } 
];
