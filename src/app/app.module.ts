import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { SummaryComponent } from './summary/summary.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SummaryComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [{provide: 'auth', useClass: AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
