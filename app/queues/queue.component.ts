import {Component, Injector} from '@angular/core';
import { IQueueMessage } from './queue-message';
import {QueueMessageService} from './queue.service'

@Component({
  moduleId: module.id,
  selector: 'sm-queues',
  templateUrl: 'queue-list.component.html',
  styleUrls: ['queue-list.component.css'],
  providers: [ QueueMessageService ]
})
export default class QueueComponent {
   serverName: string;
   queuemessages: IQueueMessage[] ;
   errorMessage: string; 
  constructor(private injector: Injector, private _queuemessageService: QueueMessageService) {
    this.serverName = this.injector.get('serverName');
  }
   ngOnInit(): void {
    this._queuemessageService.getMessages(this.serverName)
    .subscribe(queuemessages=> this.queuemessages = queuemessages,
    error => this.errorMessage = <any>error)
}
}
