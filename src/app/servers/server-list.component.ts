import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IServer } from './server/server';
import { ActivatedRoute } from '@angular/router';
import { ServerListService } from './server-list.service';
@Component({
    templateUrl: 'server-list.component.html',
    styleUrls: ['server-list.component.css'],
    providers: [ServerListService]
})
export class ServerListComponent implements OnInit {
   public servers: IServer[] ;
   public errorMessage: string; 
   public ngOnInit(): void {
    this._serverService.getServers()
    .subscribe(servers=> this.servers = servers,
    error => this.errorMessage = <any>error)
}
constructor (private _serverService: ServerListService){
}

}
