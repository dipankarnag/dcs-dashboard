import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

import { DcsService } from '../../services/dcs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public innerWidth: any;
  public innerHeight: any;
  @ViewChild('topBar') topBar: ElementRef|any;
  public topBarHeight: any;
  public matGridRowHeight: any;
  @ViewChild('mainGrid') mainGrid: ElementRef|any;
  public mainGridRows: any;
  public gutterSpace: any;
  public dcsLinks: any = {};

  constructor(private dcsService: DcsService) { }

  ngOnInit() {
    this.matGridRowHeight = 0;
    this.dcsService.getDcsLinks().subscribe(
      data => {
        this.dcsLinks = data;
        // console.log(data['ktps']);
      }, err => console.error(err));
  }

  @HostListener('window:load', ['$event'])
  @HostListener('window:resize', ['$event'])
  onrender() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.topBarHeight = this.topBar._elementRef.nativeElement.offsetHeight;
    this.mainGridRows = this.mainGrid._tileStyler._rows;
    this.gutterSpace = parseInt(this.mainGrid._gutter.substring(0, this.mainGrid._gutter.length - 2), 10);
    this.matGridRowHeight = ((this.innerHeight - this.topBarHeight) / this.mainGridRows) - this.gutterSpace;
    // console.log(this.innerWidth, this.innerHeight, this.topBarHeight, this.topBar, this.gutterSpace);
  }

  onReload() {
    window.location.reload();
  }

}
