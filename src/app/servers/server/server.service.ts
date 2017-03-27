import { Injectable } from '@angular/core';
import { IServer } from './server/server';
import {Subject} from 'rxjs/Subject';

export interface currentServer {
   name:string;
}

@Injectable()
export class ServerService {
   server: currentServer = {name:""};
  saveServer(str){
    this.server.name=str; 
  }
  getServer()
  {   
    return this.server.name;
  }
}
