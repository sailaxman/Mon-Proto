import { Injectable } from '@angular/core';
import { IServer } from './server/server';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class ServerListService {
    private _serverListUrl = 'api/servers/servers.json';

    constructor(private _http: Http) {}

    public getServers(): Observable<IServer[]> {
        return this._http.get(this._serverListUrl)
        .map((response: Response) => <IServer[]> response.json())
        .do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
