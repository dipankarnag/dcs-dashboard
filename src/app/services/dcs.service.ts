import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DcsService {

  private _dcsLinkUrl = 'assets/data/dcs.json';
  private _getDcsDataUrl = 'https://wbpdcl.co.in/dcs-proxy-api/get_dcs_data.php';

  constructor(private http: HttpClient) { }

  getDcsLinks() {
    return this.http.get(this._dcsLinkUrl);
  }

  getDcsData(plant, unitno) {
    return this.http.get(this._getDcsDataUrl, {
      observe: 'response',
      params: {
        'plant': plant,
        'unitno': unitno
      }
    });
  }

}
