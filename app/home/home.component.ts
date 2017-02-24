import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ServerListComponent } from './../servers/server-list.component';
import { ServerComponent } from './../servers/server.component';
import { IServer } from './../servers/server';
import { ServerService } from './../servers/server.service';
@Component({
    moduleId: module.id,
    selector: 'sm-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers:[ ServerService ]
})
export class HomeComponent implements OnInit {
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