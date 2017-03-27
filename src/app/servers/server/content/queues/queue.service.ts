import { Injectable } from '@angular/core';
import { IQueueMessage } from './queue-message';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class QueueMessageService {
    private _messageUrl = 'api/queues/queues.json';
    constructor(private _http: Http) {}
    public getMessages(serverName: String): Observable<IQueueMessage[]> {
        return this._http.get(this._messageUrl)
        .map((response: Response) => <IQueueMessage[]> response.json())
        .do(data => console.log(serverName + ' ' + 'All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
