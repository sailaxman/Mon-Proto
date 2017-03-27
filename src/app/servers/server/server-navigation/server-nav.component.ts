import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'server-nav',
    templateUrl: 'server-nav.component.html',
    styleUrls: ['server-nav.component.css'],
})
export class ServerNavComponent {
  @Input()
  public serverName: string;
}