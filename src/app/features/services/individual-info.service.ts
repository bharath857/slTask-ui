import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanetInfo } from '../modles/user.model';

@Injectable({
  providedIn: 'root'
})
export class IndividualInfoService {

  constructor(private http: HttpClient) { }

  getPlanetInfo(url: string) {
    return this.http.get<PlanetInfo>(url)
  }
}
