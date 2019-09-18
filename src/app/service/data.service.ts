import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bus } from '../api/bus';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  public getMysqlUsersData(): Observable<Bus[]> {
    return this._http.get<Bus[]>('../../assets/json/bus.json').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = 'Error: ${error.error.message}';
    } else {
      // server-side error
      errorMessage = 'Error Code:' + error.status + '\nMessage: ${error.message}';
    }

    return throwError(errorMessage);
  }
}
