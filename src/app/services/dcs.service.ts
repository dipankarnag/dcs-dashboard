import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DcsService {

  private _dcsLinkUrl = 'assets/data/dcs.json';
  private _dcs2LinkUrl = 'assets/data/dcs2.json';
  private _getDcsLinksUrl = 'https://wbpdcl.co.in/dcs-proxy-api/get_dcs_links.php';
  private _getDcsDataUrl = 'https://wbpdcl.co.in/dcs-proxy-api/get_dcs_data.php';

  constructor(private http: HttpClient) { }

  // getDcsLinks() {
  //   return this.http.get(this._dcsLinkUrl);
  // }

  getDcsLinks() {
    return this.http.get(this._getDcsLinksUrl);
  }

  getDcs2Links() {
    return this.http.get(this._dcs2LinkUrl);
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
