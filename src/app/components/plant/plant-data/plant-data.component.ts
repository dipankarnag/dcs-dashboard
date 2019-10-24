import { Component, OnInit, Inject, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

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

  nameFilter = new FormControl('');
  codeFilter = new FormControl('');
  descriptionFilter = new FormControl('');

  filterValues = {
    name: '',
    code: '',
    description: ''
  };

  timestamp: string;

  constructor(
    private dialogRef: MatDialogRef<PlantDataComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) { }

  ngOnInit() {
    this.timestamp = this.passedData.timestamp;
    this.tagList = new MatTableDataSource(this.passedData.data.tags);
    this.modifyDataInTable((window.innerWidth < 650) ? 21 : 50);
    this.tagList.filterPredicate = this.createFilter();

    this.nameFilter.valueChanges
        .subscribe(
          name => {
            this.filterValues.name = name;
            this.tagList.filter = JSON.stringify(this.filterValues);
          }
        );
    this.codeFilter.valueChanges
        .subscribe(
          code => {
            this.filterValues.code = name;
            this.tagList.filter = JSON.stringify(this.filterValues);
          }
        );
    this.descriptionFilter.valueChanges
        .subscribe(
          description => {
            this.filterValues.description = description;
            this.tagList.filter = JSON.stringify(this.filterValues);
          }
        );
  }

  createFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function (data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return data.name.toLowerCase().indexOf(searchTerms.name.toLowerCase()) !== -1
            && data.code.toLowerCase().indexOf(searchTerms.code.toLowerCase()) !== -1
            && data.description.toLowerCase().indexOf(searchTerms.description.toLowerCase()) !== -1;
    };
    return filterFunction;
  }

  onClose() {
    this.dialogRef.close();
  }

  @HostListener('window:load', ['$event'])
  @HostListener('window:resize', ['$event'])
  onrender() {
    this.modifyDataInTable((window.innerWidth < 650) ? 21 : 50);
  }

  breakString(str: string, breakLength: number) {
    return (str.length <= breakLength) ?
      str : str.substr(0, breakLength) + '\n' + this.breakString(str.substr(breakLength, str.length - breakLength), breakLength);
  }

  modifyDataInTable(breakLength: number) {
    const tempTagList = this.tagList.data;
    for (let i = 0; i < tempTagList.length; i++) {
      tempTagList[i].name = this.breakString(tempTagList[i].name, breakLength);
    }
    this.tagList.data = tempTagList;
  }

}
