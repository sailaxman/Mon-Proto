import { Injectable } from '@angular/core';
import { IServer } from './server';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class ServerService{
    private _queueUrl = 'api/servers/servers.json';

    constructor(private _http:Http){}

    getServers(): Observable<IServer[]>{
        return this._http.get(this._queueUrl)
        .map((response: Response) => <IServer[]> response.json())
        .do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}