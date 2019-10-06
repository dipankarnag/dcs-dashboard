import { Component, OnInit } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dcs-dashboard';

  constructor(private swUpdate: SwUpdate) {}

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
