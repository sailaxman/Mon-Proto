import { Component, OnInit, OnDestroy } from '@angular/core';
import { IServer } from './server';
import { ActivatedRoute } from '@angular/router'
import {ServerService} from './server.service'
@Component({
    moduleId: module.id,
    templateUrl: 'server.component.html',
    styleUrls: ['server.component.css'],
    providers: [ServerService]
})
export class ServerComponent implements OnInit, OnDestroy{
    serverName: string;
    sub: any;     
    ngOnInit() {
    this.sub = this._route
      .params
      .subscribe(params => {
        console.log(params);  
        this.serverName = params['serverName'];       
      });

  }
    ngOnDestroy() {
    this.sub.unsubscribe();
  }
constructor (private _route: ActivatedRoute){    
}

}