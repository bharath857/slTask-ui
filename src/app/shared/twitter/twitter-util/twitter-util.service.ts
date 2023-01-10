import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../../services/env-variables/app-config.service';
import { Param } from '../../services/util/util.service';


@Injectable({
  providedIn: 'root'
})
export class TwitterUtilService {
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
      return `${this.config.api_endpoint_twitter}${path}`
    }

    let equalSeparatedParms = parms.map((param: Param) => `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`);
    return `${this.config.api_endpoint_twitter}${path}?${equalSeparatedParms.join('&')}`
  }
}
