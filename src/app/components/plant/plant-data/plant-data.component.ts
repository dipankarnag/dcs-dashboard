import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-plant-data',
  templateUrl: './plant-data.component.html',
  styleUrls: ['./plant-data.component.scss']
})
export class PlantDataComponent implements OnInit {

  tagList: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'code',
    'name',
    'description',
    'value',
    'unit'
  ];

  constructor(
    private dialogRef: MatDialogRef<PlantDataComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) { }

  ngOnInit() {
    // console.log('from plant-data', this.passedData);
    this.tagList = new MatTableDataSource(this.passedData.data.tags);
  }

  onClose() {
    this.dialogRef.close();
  }

}
