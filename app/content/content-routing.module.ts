import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent }           from './content.component';
import { ServerComponent }           from './../servers/server.component';

const contentRoutes: Routes = [
  {
    path: '',
    component: ServerComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'content/:content', component: ContentComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule {}