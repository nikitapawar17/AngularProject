import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';


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
      MatChipsModule,
      MatDialogModule,
      MatDatepickerModule,
      OwlDateTimeModule,
      OwlNativeDateTimeModule,
      MatAutocompleteModule,
      MatSelectModule
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
      MatChipsModule,
      MatDialogModule,
      MatDatepickerModule,
      OwlDateTimeModule,
      OwlNativeDateTimeModule,
      MatAutocompleteModule,
      MatSelectModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]

})
 
export  class  MaterialModule { }