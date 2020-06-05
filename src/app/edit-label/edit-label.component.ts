import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from "../data.service";
import { LabelService } from "../label-service";

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  hover =false;

  constructor(public dialogRef: MatDialogRef<EditLabelComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar : MatSnackBar, private router :Router, private data_service : DataService, private label_service : LabelService) 
    {      this.labelsArray = data; }

  newLabel = '';
  label = '';
  is_deleted= false;
  labelsArray = [];

  ngOnInit(): void {
    this.dialogRef.updateSize('auto','auto')
  }

  create_label()
  {  
    // if(this.newLabel)
    // {
      let labelInfo =
      {
        label : this.label,
        is_deleted: this.is_deleted
      }

      this.labelsArray.push(labelInfo);

      this.label_service.create_label(labelInfo).subscribe(response =>
        {    
          this.snackbar.open(response['message'],'Done',
          {
            duration : 2000,
            horizontalPosition :'start'
          })

          this.label=''
          this.is_deleted = false

          this.data_service.changed_data(
          {
            type : 'getLabels'
          });
        },
        error =>
        {
          console.log("Error :", error);
          this.snackbar.open(error['message'],'Done',
          {
            duration : 2000,
            horizontalPosition :'start',
            verticalPosition : 'top'
          })
        })
    // }
  }

  delete_label(labelInfo)
  {
    this.label_service.delete_label(labelInfo.id).subscribe(response =>
      {
        this.data_service.changed_data(
            {
              type : 'getNotes'
            });

        this.snackbar.open(response['message'],'Done',
        {
          duration : 2000,
          verticalPosition : 'top',
          horizontalPosition : 'center'
        });
      },
      error =>
      {
        console.log("Error : ",error);

        this.snackbar.open(error['error'],'Done',
        {
          duration : 2000,
          verticalPosition : 'bottom',
          horizontalPosition : 'start'
        })
      })
  }

  clear()
  {
    this.label = '';
  }
}
