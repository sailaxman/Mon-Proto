import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { MessageFilterPipe } from './messages/message-filter.pipe';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import {MaterialModule} from '@angular/material';
import {MdSidenav} from '@angular/material'
import {MdSidenavContainer, MdSidenavModule} from '@angular/material'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ContentModule }  from './content/content.module';
import { ServerModule } from './servers/server.module';
import { AppRoutingModule }        from './app-routing.module';
import { PageNotFoundComponent }   from './not-found.component';


@NgModule({
  imports: [ BrowserModule, ContentModule, ServerModule, NgxDatatableModule, FormsModule, HttpModule, MaterialModule.forRoot(), AppRoutingModule],
  declarations: [ AppComponent , MessageFilterPipe , HomeComponent, PageNotFoundComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  
}
