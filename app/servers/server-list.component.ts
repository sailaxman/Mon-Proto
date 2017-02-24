import { Component, OnInit } from '@angular/core';
import { IServer } from './server';
import {ServerService} from './server.service'
@Component({
    moduleId: module.id,
    templateUrl: 'server-list.component.html',
    styleUrls: ['server-list.component.css'],
    providers: [ServerService]
})
export class ServerListComponent implements OnInit{
    servers: IServer[] ;
    errorMessage: string; 
   ngOnInit(): void {
    this._serverService.getServers()
    .subscribe(servers=> this.servers = servers,
    error => this.errorMessage = <any>error)
}
constructor (private _serverService: ServerService){
}

}