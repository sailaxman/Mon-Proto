import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LoginComponent }  from './login.component';
import { routes } from './login.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),  
  ],
  declarations: [
    LoginComponent
  ],
  exports: [ LoginComponent ],
})
export class LoginModule {
     public static routes = routes;
}
