import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DcsService {

  private _dcsUrl = 'assets/data/dcs.json';

  constructor(private http: HttpClient) { }

  getDcsLink() {
    return this.http.get(this._dcsUrl);
  }
}
