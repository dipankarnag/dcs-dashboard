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
          'configured': this.ktpsLinks[unitno]['configured']
        });
        if (this.ktpsLinks[unitno]['configured'] !== false) {
          this.dcsService.getDcsData('ktps', unitno)
          .subscribe(response => {
            const targetUnitno = response.url.split('&unitno=')[1];
            this.ktpsUnits[this.ktpsUnits.findIndex(unit => unit.unitno === targetUnitno)]['data'] = response.body;
            console.log(this.ktpsUnits);
          });
        }
      }
    }
  }

}
