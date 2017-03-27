import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentComponent }    from './content.component';
import DynamicComponent  from './dynamic-component';
import LogComponent from './logs/log.component';
import DeliveryComponent from './deliveries/delivery.component';
import QueueComponent from './queues/queue.component';
import { routes } from './content.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ContentComponent,
    DynamicComponent,
    LogComponent,
    DeliveryComponent,
    QueueComponent
  ],
})
export class ContentModule {
   public static routes = routes;
}
