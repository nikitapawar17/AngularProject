import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
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
import { ArchiveComponent } from './archive/archive.component';
import { RemainderComponent } from './remainder/remainder.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { EditLabelComponent } from './edit-label/edit-label.component';
import { EditNoteComponent }  from './edit-note/edit-note.component';
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
    {
      path : 'trash', component : TrashComponent
    },
    {
      path : 'archive', component : ArchiveComponent
    },
    {
      path : 'remainder', component : RemainderComponent
    },
    {
      path : 'collaborator', component : CollaboratorComponent
    },
    {
      path: 'editlabel', component : EditLabelComponent
    },
    {
      path: 'editnote', component : EditNoteComponent
    }
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
    ArchiveComponent,
    AlertComponent,
    RemainderComponent,
    CollaboratorComponent,
    EditLabelComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule. forRoot(routes),
    MatSelectModule,
    MaterialModule,
    MatIconModule
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
