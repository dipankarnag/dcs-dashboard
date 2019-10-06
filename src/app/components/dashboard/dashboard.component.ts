import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    this.topBarHeight = this.topBar._elementRef.nativeElement.offsetHeight;
    this.matGridRowHeight = ((this.innerHeight - this.topBarHeight) / 2) - 1;
    console.log(this.innerWidth, this.innerHeight, this.topBarHeight);
  }

  @HostListener('window:resize', ['$event'])
  onresize() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.topBarHeight = this.topBar._elementRef.nativeElement.offsetHeight;
    this.matGridRowHeight = ((this.innerHeight - this.topBarHeight) / 2) - 1;
    console.log(this.innerWidth, this.innerHeight, this.topBarHeight);
  }

}
