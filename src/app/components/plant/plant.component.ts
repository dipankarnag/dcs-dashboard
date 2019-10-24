import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import * as moment from 'moment';

import { DcsService } from '../../services/dcs.service';

import { PlantDataComponent } from './plant-data/plant-data.component';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlantComponent implements OnInit, OnChanges {

  public innerWidth: any;

  @Input('unitLinks') unitLinks: any;
  public units = [];

  @Input('plantName') plantName: string;

  constructor(
    private dcsService: DcsService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.unitLinks !== undefined) {
      for (const unitno of Object.keys(this.unitLinks)) {
        this.units.push({
          'plantName': this.plantName,
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
            this.units[targetIndex]['color'] = 'accent';
            const responseTimestamp = moment(response.body['timestamp'], 'YYYY_MM_DD_HH_mm_ss');
            this.units[targetIndex]['timestamp'] = responseTimestamp.format('DD-MMM-YYYY HH:mm:ss');
            const currentTimeStamp = moment();
            const diffInTime = moment.duration(currentTimeStamp.diff(responseTimestamp)).asMinutes();
            this.units[targetIndex]['status'] = (diffInTime < 16) ? 'syncd' : 'not-syncd';
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

  onShowData(unitno) {
    const targetIndex = this.units.findIndex(unit => unit.unitno === unitno);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = '90vh';
    dialogConfig.data = this.units[targetIndex];
    this.dialog.open(PlantDataComponent, dialogConfig);
  }

}
