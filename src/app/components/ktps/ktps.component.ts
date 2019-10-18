import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ktps',
  templateUrl: './ktps.component.html',
  styleUrls: ['./ktps.component.scss']
})
export class KtpsComponent implements OnInit, OnChanges {

  public innerWidth: any;

  @Input('ktpsLinks') ktpsLinks: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.ktpsLinks !== undefined) {
      console.log(this.ktpsLinks);
    }
  }

}
