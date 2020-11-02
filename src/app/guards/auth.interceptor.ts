import { LocalStorageService } from './../services/local-storage.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const ts = new Date().getTime();
    const publicKey = this.localStorageService.getItem('publicKey') as string;
    const privateKey = this.localStorageService.getItem('privateKey') as string;
    const hash = Md5.hashStr(ts + privateKey + publicKey);

    request = request.clone({
      setParams: {
        ts: ts.toString(),
        apikey: publicKey,
        hash: hash.toString(),
      },
    });

    return next.handle(request);
  }
}
