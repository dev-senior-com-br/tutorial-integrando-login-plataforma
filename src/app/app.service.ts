import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { service, user } from '@seniorsistemas/senior-platform-data';
import { Observable, forkJoin, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return forkJoin(
      from(service.getRestUrl()),
      from(user.getAuthHeader()),
    ).pipe(concatMap(values => {
      const [bridgeUrl, authHeader] = values;
      let headers = new HttpHeaders({
        "Authorization": authHeader
      });
      return this.http.get<any>(`${bridgeUrl}platform/user/queries/getUser`, { headers });;
    }));
  }
}