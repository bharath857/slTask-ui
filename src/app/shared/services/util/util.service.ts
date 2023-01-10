import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../env-variables/app-config.service';

export interface Param {
  key: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  config: any;
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private appConfig: AppConfigService) {
    this.config = this.appConfig.getConfig();
  }

  generateURL(path: string, parms: Param[]) {
    if (path == null || path === undefined) {
      throw new Error('Path cannot be null')
    }
    if (!parms || parms.length === 0) {
      return `${this.config.api_endpoint}${path}`
    }

    let equalSeparatedParms = parms.map((param: Param) => `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`);
    return `${this.config.api_endpoint}${path}?${equalSeparatedParms.join('&')}`
  }
}

