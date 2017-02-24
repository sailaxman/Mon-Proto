import {Component, Injector} from '@angular/core';
import { IDeliveryMessage } from './delivery-message';
import {DeliveryMessageService} from './delivery.service'

@Component({
  moduleId: module.id,
  selector: 'sm-deliveries',
  templateUrl: 'delivery-list.component.html',
  styleUrls: ['delivery-list.component.css'],
  providers: [ DeliveryMessageService ]
})
export default class DeliveryComponent {
   serverName: string;
   deliverymessages: IDeliveryMessage[] ;
   errorMessage: string; 
  constructor(private injector: Injector, private _deliverymessageService: DeliveryMessageService) {
    this.serverName = this.injector.get('serverName');
  }
   ngOnInit(): void {
    this._deliverymessageService.getMessages(this.serverName)
    .subscribe(deliverymessages=> this.deliverymessages = deliverymessages,
    error => this.errorMessage = <any>error)
}
}