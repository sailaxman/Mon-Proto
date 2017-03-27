import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IServer } from './server';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from './server.service';
@Component({
    templateUrl: 'server.component.html',
    styleUrls: ['server.component.css'],
    providers: [ServerService]
})
export class ServerComponent implements OnInit, OnDestroy {
    private sub: any;
    constructor (private _route: ActivatedRoute, private serverService: ServerService) {}
    public ngOnInit() {
    this.sub = this._route
      .params
      .subscribe(params => {
        this.serverService.saveServer(params['serverName']);
      });
  }
    public ngOnDestroy() {
    this.sub.unsubscribe(); 
  }
}
