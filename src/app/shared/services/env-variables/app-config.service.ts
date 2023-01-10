import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config: Observable<any>;
  public configSubject$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  public loadConfig(): any {
    return this.http.get('../../configmaps/env.json').toPromise().then((config: any) => {
      this.config = config;
      this.configSubject$.next(this.config);
    }).catch((err: any) => {
      return err;
    })
  }

  public getConfig() {
    return this.config;
  }
}
