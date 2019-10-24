import { Component, OnInit, Inject, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-plant-data',
  templateUrl: './plant-data.component.html',
  styleUrls: ['./plant-data.component.scss']
})
export class PlantDataComponent implements OnInit {

  @ViewChild('tableView')
  public tableView: ElementRef|any;

  tagList: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'name',
    // 'code',
    'value',
    'unit',
    'description'
  ];

  constructor(
    private dialogRef: MatDialogRef<PlantDataComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) { }

  ngOnInit() {
    this.tagList = new MatTableDataSource(this.passedData.data.tags);
    this.modifyDataInTable((window.innerWidth < 650) ? 21 : 50);
    console.log();
  }

  onClose() {
    this.dialogRef.close();
  }

  @HostListener('window:load', ['$event'])
  @HostListener('window:resize', ['$event'])
  onrender() {
    // console.log(window.innerWidth);
    this.modifyDataInTable((window.innerWidth < 650) ? 21 : 50);
    // this.tableView._elementRef.nativeElement.childNodes.forEach(item => console.log(item));
  }

  breakString(str: string, breakLength: number) {
    return (str.length <= breakLength) ?
      str : str.substr(0, breakLength) + '\n' + this.breakString(str.substr(breakLength, str.length - breakLength), breakLength);
  }

  modifyDataInTable(breakLength: number) {
    const tempTagList = this.tagList.data;
    // console.log(tempTagList[0].name);

    // tempTagList.forEach(item => {
    //   tempTagList[tempTagList.indexOf(item)].name = this.breakString(item.name, 10);
    //   console.log(this.breakString(tempTagList[tempTagList.indexOf(item)].name, 10));
    // });
    for (let i = 0; i < tempTagList.length; i++) {
      tempTagList[i].name = this.breakString(tempTagList[i].name, breakLength);
    }
    // console.log(tempTagList);

    // tempTagList.forEach(item => console.log(item.name));
    this.tagList.data = tempTagList;
  }

}
