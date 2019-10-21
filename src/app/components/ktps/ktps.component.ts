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
          'configured': this.ktpsLinks[unitno]['configured'],
          'status': this.ktpsLinks[unitno]['status'],
          'color': ''
        });
        if (this.ktpsLinks[unitno]['configured'] !== false) {
          this.dcsService.getDcsData('ktps', unitno)
          .subscribe(response => {
            const targetUnitno = response.url.split('&unitno=')[1];
            const targetIndex = this.ktpsUnits.findIndex(unit => unit.unitno === targetUnitno);
            this.ktpsUnits[targetIndex]['data'] = response.body;
            this.ktpsUnits[targetIndex]['status'] = 'available';
            this.ktpsUnits[targetIndex]['color'] = 'accent';
            console.log(response);
          }, error => {
            // const targetUnitno = response.url.split('&unitno=')[1];
            // const targetIndex = this.ktpsUnits.findIndex(unit => unit.unitno === targetUnitno);
            const targetUnitno = error.url.split('&unitno=')[1];
            const targetIndex = this.ktpsUnits.findIndex(unit => unit.unitno === targetUnitno);
            this.ktpsUnits[targetIndex]['data'] = error.body;
            this.ktpsUnits[targetIndex]['status'] = 'not-available';
            this.ktpsUnits[targetIndex]['color'] = 'warn';
          });
        }
      }
    }
  }

}
