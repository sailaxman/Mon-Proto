import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ContentComponent }    from './content.component';
import DynamicComponent  from './dynamic-component';
import LogComponent from './../logs/log.component';
import DeliveryComponent from './../deliveries/delivery.component';
import QueueComponent from './../queues/queue.component';

import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContentRoutingModule
  ],
  declarations: [
    ContentComponent,
    DynamicComponent,
    LogComponent,
    DeliveryComponent,
    QueueComponent
  ],
})
export class ContentModule {}


