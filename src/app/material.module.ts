import {NgModule, CUSTOM_ELEMENTS_SCHEMA}  from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    
  imports: [
      CommonModule, 
      MatProgressSpinnerModule,
      MatDialogModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      ReactiveFormsModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      FormsModule,
      MatMenuModule,
      BrowserAnimationsModule, 
      FlexLayoutModule
  ],
  exports:[
      CommonModule, 
      MatProgressSpinnerModule,
      MatDialogModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      ReactiveFormsModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      FormsModule,
      MatMenuModule,
      BrowserAnimationsModule,
      FlexLayoutModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]

})
 
export  class  MaterialModule { }