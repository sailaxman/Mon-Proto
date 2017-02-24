import {Component, Injector} from '@angular/core';
import { ILogMessage } from './log-message';
import {LogMessageService} from './log.service'

@Component({
  moduleId: module.id,
  selector: 'sm-logs',
  templateUrl: 'log-list.component.html',
  styleUrls: ['log-list.component.css'],
  providers: [ LogMessageService ]
})
export default class LogComponent {
   serverName: string;
   logmessages: ILogMessage[] ;
   errorMessage: string; 
  constructor(private injector: Injector, private _logmessageService: LogMessageService) {
    this.serverName = this.injector.get('serverName');
  }
   ngOnInit(): void {
    this._logmessageService.getMessages(this.serverName)
    .subscribe(logmessages=> this.logmessages = logmessages,
    error => this.errorMessage = <any>error)
}
}