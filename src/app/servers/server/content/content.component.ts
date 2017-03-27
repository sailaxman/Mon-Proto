import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import DynamicComponent from './dynamic-component';
import LogComponent from './logs/log.component';
import DeliveryComponent from './deliveries/delivery.component';
import QueueComponent from './queues/queue.component';
import { ServerService } from '../server.service'

@Component({
    selector: 'sm-content',
    template: '<dynamic-component [componentData]="componentData"></dynamic-component>'
})
export class ContentComponent implements OnInit, OnDestroy{
    public componentData :any = null;
    private serverName: string;
    private content: string;
    private sub: any;
    private serverSub:any;
    constructor (private _route: ActivatedRoute, private serverService: ServerService){
    this.serverName  = serverService.getServer()
    }    
    public ngOnInit(){
    this.sub = this._route
      .params
      .subscribe( params => {
         
        this.content = params['content'];
        if(this.content==='Logs'){
        this.componentData = {
        component: LogComponent,
        inputs: {
            serverName: this.serverName,  
        }
        };
        }
        if(this.content==='Deliveries'){
        this.componentData = {
        component: DeliveryComponent,
        inputs: {
        serverName: this.serverName,
        }
        };
        }
        if(this.content==='Queues'){
        this.componentData = {
        component: QueueComponent,
        inputs: {
        serverName: this.serverName,   
        }
        };
        }
      });     
  }
    public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
