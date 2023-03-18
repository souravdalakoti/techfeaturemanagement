import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8 '
})
};
@Injectable()
export class HttpService  {

  get apiUrl(): string {
    return environment.apiEndpoint;
  }

  constructor(private http: HttpClient) {
 
  }

  get(endpoint: string, options?:any): Observable<any> {

    return this.http.get(`${this.apiUrl}${endpoint}`, options??httpOptions)
    // .pipe(
    //   catchError(super.handleError)
    // );
  }

  post(endpoint: string, data:any, options?:any): Observable<any> {
    return this.http.post(`${this.apiUrl}${endpoint}`, data, options??httpOptions).pipe(
      catchError(this.handleError) // then handle the error
    );;
  }

  put(endpoint: string, data:any, options?:any): Observable<any> {
    return this.http.put(`${this.apiUrl}${endpoint}`, data, options??httpOptions);
  }

  patch(endpoint: string, data:any, options?:any): Observable<any> {
    return this.http.patch(`${this.apiUrl}${endpoint}`, data, options??httpOptions);
  }

  delete(endpoint: string, options?:any): Observable<any> {
    return this.http.delete(`${this.apiUrl}${endpoint}`, options??httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    debugger;
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
