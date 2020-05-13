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
import { DisplayNoteComponent } from './display-note/display-note.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { UsrInterceptorComponent } from './usr-interceptor/usr-interceptor.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteComponent } from './note/note.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconComponent } from './icon/icon.component';
import { TrashComponent } from './trash/trash.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService} from './alert.service';

import { MaterialModule } from './material.module';

const routes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgot_password', component: ForgotPswdComponent},
  { path: 'reset_password/:token', component: ResetPswdComponent},

  { path: 'display_note', component: DisplayNoteComponent },
  { path : 'dashboard',component:DashboardComponent ,children: [
    {
      path: '', redirectTo: 'note', pathMatch: 'full'
    },
    {
      path : 'note', component: NoteComponent
    },
    {
      path: 'create_note', component: CreateNoteComponent
    },
    // {
    //   path : 'display_note', component : DisplayNoteComponent
    // },
    {
      path : 'trash', component : TrashComponent
    },
  ]}

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
    NoteComponent,
    DisplayNoteComponent,
    CreateNoteComponent,
    IconComponent,
    TrashComponent,
    AlertComponent
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
