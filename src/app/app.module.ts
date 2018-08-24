import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth/auth.guard';
import { LoggedGuard } from './auth/logged.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    LoggedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
