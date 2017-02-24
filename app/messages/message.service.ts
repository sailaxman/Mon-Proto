import { Injectable } from '@angular/core';
import { IMessage } from './message';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class MessageService{
    private _messageUrl = 'api/messages/messages.json';

    constructor(private _http:Http){}

    getMessages(): Observable<IMessage[]>{
        return this._http.get(this._messageUrl)
        .map((response: Response) => <IMessage[]> response.json())
        .do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}