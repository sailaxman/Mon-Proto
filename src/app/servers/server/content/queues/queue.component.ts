import { Component, Injector, OnInit } from '@angular/core';
import { IQueueMessage } from './queue-message';
import { QueueMessageService } from './queue.service';

@Component({
  selector: 'sm-queues',
  templateUrl: 'queue-list.component.html',
  styleUrls: ['queue-list.component.css'],
  providers: [ QueueMessageService ]
})
export default class QueueComponent implements OnInit {
   public serverName: string;
   public queuemessages: IQueueMessage[] ;
   private errorMessage: string;
  constructor(private injector: Injector, private _queuemessageService: QueueMessageService) {
    this.serverName = this.injector.get('serverName');
  }
   public ngOnInit(): void {
    this._queuemessageService.getMessages(this.serverName)
    .subscribe(queuemessages => this.queuemessages = queuemessages,
    error => this.errorMessage = <any> error);
}
}
