import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { DcsService } from '../../services/dcs.service';

@Component({
  selector: 'app-ktps',
  templateUrl: './ktps.component.html',
  styleUrls: ['./ktps.component.scss']
})
export class KtpsComponent implements OnInit, OnChanges {

  public innerWidth: any;

  @Input('ktpsLinks') ktpsLinks: any;
  public ktpsUnits = [];

  constructor(private dcsService: DcsService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.ktpsLinks !== undefined) {
      for (const unitno of Object.keys(this.ktpsLinks)) {
        this.ktpsUnits.push({
          'unitno': unitno,
          'link': this.ktpsLinks[unitno]['url']
        });
        if (this.ktpsLinks[unitno]['url'] !== '#') {
          this.dcsService.getDcsData('ktps', unitno, this.ktpsLinks[unitno]['url'])
          .subscribe(data => {
            console.log(data);
          });
        }
      }
    }
  }

}
