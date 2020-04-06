import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'  
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ForgotPswdComponent } from './forgot_pswd/forgot_pswd.component'
import { ResetPswdComponent } from './reset_pswd/reset_pswd.component'
import { ProfileComponent } from './profile/profile.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service';
import { UsrInterceptorComponent } from './usr-interceptor/usr-interceptor.component'

const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgot_password', component: ForgotPswdComponent},
  { path: 'reset_password/:token', component: ResetPswdComponent},
  {
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotPswdComponent, 
    ResetPswdComponent
    // UsrInterceptorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule. forRoot(routes)
  ],
  // providers: [AuthenticationService, AuthGuardService],
  // providers: [AuthenticationService, AuthGuardService, ResetPswdComponent],
  providers:  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UsrInterceptorComponent,
      multi: true
    },
    {
      provide: AuthenticationService
    },
    {
      provide: AuthGuardService
    },
    {
      provide: ResetPswdComponent
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
