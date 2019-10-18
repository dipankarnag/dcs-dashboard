import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DcsService {

  private _dcsLinkUrl = 'assets/data/dcs.json';
  private _getDcsDataUrl = '/dcs-api/get_dcs_data.php';

  constructor(private http: HttpClient) { }

  getDcsLinks() {
    return this.http.get(this._dcsLinkUrl);
  }

  getDcsData(url: string) {
    console.log(url);
    return this.http.post(this._getDcsDataUrl, {
      'url': url
    });
  }
}
