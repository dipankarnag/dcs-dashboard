import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-plant-data',
  templateUrl: './plant-data.component.html',
  styleUrls: ['./plant-data.component.scss']
})
export class PlantDataComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PlantDataComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) { }

  ngOnInit() {
    console.log('from plant-data', this.passedData);
  }

}
