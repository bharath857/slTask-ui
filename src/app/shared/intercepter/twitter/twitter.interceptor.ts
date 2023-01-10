import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../../services/env-variables/app-config.service';
import data  from '../../../../configmaps/env.json'
@Injectable()
export class TwitterInterceptor implements HttpInterceptor {
 
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedRequestt = request.clone({
      headers:request.headers.set(Constants.authorization, `bearer ${data.secure_token}`)
    })
    return next.handle(modifiedRequestt);
  }
}

export class Constants {
 public static readonly authorization = 'Authorization';
}
