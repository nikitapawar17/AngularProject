import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
// HttpInterceptor is used to provide http modules to create Interceptors
export class UsrInterceptorComponent implements HttpInterceptor { 
  constructor() { }

  //function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //how to update the request Parameters
    const updatedRequest = request.clone({
      headers: request.headers.set("Authorization", "Some-dummyCode")
    });
    //logging the updated Parameters to browser's console
    console.log("Before making api call : ", updatedRequest);
    return next.handle(request).pipe(
      tap(
        event => {
          //logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log("api call successfully :", event);
          }
        },
        error => {
          //logging the http response to browser's console in case of a failure
          if (event instanceof HttpResponse) {
            console.log("error in api call :", event);
          }
        }
      )
    );
  }
}








