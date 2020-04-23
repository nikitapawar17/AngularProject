import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPswdComponent } from './forgot_pswd/forgot_pswd.component';
import { ResetPswdComponent } from './reset_pswd/reset_pswd.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { UsrInterceptorComponent } from './usr-interceptor/usr-interceptor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService} from './alert.service';

import { MaterialModule } from './material.module';

const routes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgot_password', component: ForgotPswdComponent},
  { path: 'reset_password/:token', component: ResetPswdComponent},
  { path: 'dashboard',
   component: DashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPswdComponent, 
    ResetPswdComponent, 
    DashboardComponent, 
    AlertComponent
    // UsrInterceptorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule. forRoot(routes),
    MaterialModule
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
    },
    {
      provide: AlertService
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
