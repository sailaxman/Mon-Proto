import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import DynamicComponent from './dynamic-component';
import LogComponent from './../logs/log.component';
import DeliveryComponent from './../deliveries/delivery.component';
import QueueComponent from './../queues/queue.component';
@Component({
    moduleId: module.id,
    selector: 'sm-content',
    template: '<dynamic-component [componentData]="componentData"></dynamic-component>'
})
export class ContentComponent implements OnInit, OnDestroy{
    componentData :any = null;
    serverName: string;
    content: string;
    private sub: any;
    
    ngOnInit() {
    this.sub = this._route
      .params
      .subscribe(params => {
        console.log(params);  
        this.serverName = params['serverName'];
        this.content = params['content'];
        if(this.content=='Logs'){
        this.componentData = {
        component: LogComponent,
        inputs: {
            serverName: this.serverName,   
        }
        };
        }
        if(this.content=='Deliveries'){
        this.componentData = {
        component: DeliveryComponent,
        inputs: {
        serverName: this.serverName, 
        }
        };
        }
        if(this.content=='Queues'){
        this.componentData = {
        component: QueueComponent,
        inputs: {
        serverName: this.serverName,    
        }
        };
        }
      });
     
  }
    ngOnDestroy() {
    this.sub.unsubscribe();
  }

constructor (private _route: ActivatedRoute){    
}

}