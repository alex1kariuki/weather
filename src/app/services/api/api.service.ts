/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
// import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = environment.weatherAPI;
  private myToken = 'something here';
  token = `Bearer ${this.myToken}`;

  options = ({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    json_headers: new HttpHeaders().append('Content-Type', 'application/json'),
    headers: new HttpHeaders().append('Authorization', `${this.token}`),
  });
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`, this.options);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  post(url: string, body: object) {
    return this.http.post(`${this.baseUrl}/${url}`, body, this.options);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  patch(url: string, body: object) {
    return this.http.patch(`${this.baseUrl}/${url}`, body, this.options);
  }

  delete(url: string) {
    return this.http.delete(`${this.baseUrl}/${url}`, this.options);
  }
}
