import { Injectable } from '@angular/core';
import { ILogMessage } from './log-message';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class LogMessageService{
    private _messageUrl = 'api/logs/logs.json';

    constructor(private _http:Http){}

    getMessages(serverName:String): Observable<ILogMessage[]>{
        return this._http.get(this._messageUrl)
        .map((response: Response) => <ILogMessage[]> response.json())
        .do(data => console.log(serverName +' '+ 'All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}