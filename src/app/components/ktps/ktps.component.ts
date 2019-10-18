import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ktps',
  templateUrl: './ktps.component.html',
  styleUrls: ['./ktps.component.scss']
})
export class KtpsComponent implements OnInit, OnChanges {

  public innerWidth: any;

  @Input('ktpsLinks') ktpsLinks: any;
  public ktpsUnits = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.ktpsLinks !== undefined) {
      for (const unitno of Object.keys(this.ktpsLinks)) {
        this.ktpsUnits.push({
          'unitno': unitno,
          'link': this.ktpsLinks[unitno]['url']
        });
      }
    }
  }

}
