import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
    
  imports: [
      CommonModule, 
      MatFormFieldModule,
      MatInputModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatIconModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatListModule,
      MatSidenavModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserAnimationsModule, 
      FlexLayoutModule,
      MatTooltipModule,
      MatChipsModule
  ],
  exports:[
      CommonModule, 
      MatFormFieldModule,
      MatInputModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatIconModule,
      MatSnackBarModule,
      MatListModule,
      MatToolbarModule,
      MatSidenavModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      MatTooltipModule,
      MatChipsModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]

})
 
export  class  MaterialModule { }