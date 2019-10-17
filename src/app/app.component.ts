import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dcs-dashboard';

  constructor(
    private swUpdate: SwUpdate,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'plant-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/plant-icon.svg')
    );
  }

  ngOnInit() {
    this.reloadCache();
  }

  reloadCache() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available! Would you like to update?')) {
          window.location.reload();
        }
      });
    }
  }
}
