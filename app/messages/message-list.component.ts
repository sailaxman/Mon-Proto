import { Component, OnInit } from '@angular/core';
import { IMessage } from './message';
import {MessageService} from './message.service'
@Component({
    moduleId: module.id,
    templateUrl: 'message-list.component.html',
    styleUrls: ['message-list.component.css']
})
export class MessageListComponent implements OnInit{
    pageTitle: string = 'Message List';
    listFilter: string ='Test';
    messages: IMessage[] ;
    errorMessage: string; 
   ngOnInit(): void {
    this._messageService.getMessages()
    .subscribe(messages=> this.messages = messages,
    error => this.errorMessage = <any>error)
}
constructor (private _messageService: MessageService){
}

}