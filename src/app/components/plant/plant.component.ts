import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { DcsService } from '../../services/dcs.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit, OnChanges {

  public innerWidth: any;

  @Input('unitLinks') unitLinks: any;
  public units = [];

  @Input('plantName') plantName: string;

  constructor(private dcsService: DcsService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.unitLinks !== undefined) {
      console.log(this.unitLinks, this.plantName);
      for (const unitno of Object.keys(this.unitLinks)) {
        this.units.push({
          'unitno': unitno,
          'configured': this.unitLinks[unitno]['configured'],
          'status': this.unitLinks[unitno]['status'],
          'color': ''
        });
        if (this.unitLinks[unitno]['configured'] !== false) {
          this.dcsService.getDcsData(this.plantName, unitno)
          .subscribe(response => {
            const targetUnitno = response.url.split('&unitno=')[1];
            const targetIndex = this.units.findIndex(unit => unit.unitno === targetUnitno);
            this.units[targetIndex]['data'] = response.body;
            this.units[targetIndex]['status'] = 'syncd';
            this.units[targetIndex]['color'] = 'accent';
            console.log(response);
          }, error => {
            const targetUnitno = error.url.split('&unitno=')[1];
            const targetIndex = this.units.findIndex(unit => unit.unitno === targetUnitno);
            this.units[targetIndex]['data'] = error.body;
            this.units[targetIndex]['status'] = 'not-available';
            this.units[targetIndex]['color'] = 'accent';
          });
        }
      }
    }
  }

}
