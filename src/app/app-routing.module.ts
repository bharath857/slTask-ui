import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { LandingPageComponent } from './features/components/landing-page/landing-page.component';
import { TwitterWithoutAPIComponent } from './features/components/twitter-without-api/twitter-without-api.component';
import { TwitterHomeComponent } from './features/components/twitter/components/twitter-home/twitter-home.component';
import { UserListComponent } from './features/components/Users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apiintraction/demo', component: LandingPageComponent },
  { path: 'store/demo', component: UserListComponent },
  { path: 'twitter-with-NgxTwitterTimelineModule/demo', component: TwitterWithoutAPIComponent },
  { path: 'twitter-with-api/demo', component: TwitterHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
