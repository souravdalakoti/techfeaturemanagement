import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { NavComponent } from 'src/app/Layout/navbar/nav.component';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService,private route: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            //401,403
            
            if ([401, 403].includes(err.status) ) {
                // auto logout if 401 or 403 response returned from api
                localStorage.clear();
                this.route.navigate(['Auth/Login']);
            }

            const error = (err && err.error && err.error.message) || err.statusText;
            console.log(err);
            return throwError(() => new Error('Something bad happened; please try again later.'));
        }))
    }
}