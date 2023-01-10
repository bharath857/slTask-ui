import { APP_INITIALIZER, NgModule, NgZone } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './features/components/landing-page/landing-page.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { MaterialModule } from './shared/material/material.module';
import { SpinnerComponent } from './shared/intercepter/spinner/spinner/spinner.component';
import { AppConfigService } from './shared/services/env-variables/app-config.service';
import { SpinnerInterceptorService } from './shared/intercepter/spinner/spinner-interceptor/spinner-interceptor.service';
import { UserDetailsComponent } from './features/components/Users/user-list/user-details/user-details.component';
import { IndividualDetailsComponent } from './features/components/individual-details/individual-details.component';
import { HomeComponent } from './features/components/home/home.component';
import { UserListComponent } from './features/components/Users/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { TwitterWithoutAPIComponent } from './features/components/twitter-without-api/twitter-without-api.component';
import { TwitterHomeComponent } from './features/components/twitter/components/twitter-home/twitter-home.component';
import { TwitterInterceptor } from './shared/intercepter/twitter/twitter.interceptor';
import { ScrollingModule } from '@angular/cdk/scrolling';

export function initilizeLink(endpoints: AppConfigService): any {
  return () => endpoints.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SpinnerComponent,
    AlertComponent,
    IndividualDetailsComponent,
    UserDetailsComponent,
    HomeComponent,
    UserListComponent,
    TwitterWithoutAPIComponent,
    TwitterHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(fromApp.appReducer),
    NgxTwitterTimelineModule,
    ScrollingModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initilizeLink,
    deps: [AppConfigService],
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass:SpinnerInterceptorService,
    multi:true 
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TwitterInterceptor,
    multi:true 
  },
],

  
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngZone:NgZone){
    (window as any).ngZone = this.ngZone
  }
 }
