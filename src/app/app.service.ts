import { Injectable } from '@angular/core';
import { service, user } from '@seniorsistemas/senior-platform-data';
import { SeniorApi, ENVIRONMENTS } from '@seniorsistemas/senior-core';
import { Observable, forkJoin, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  private seniorApi: SeniorApi;
  constructor() {
    this.seniorApi = new SeniorApi();
    if (environment.production) {
      this.seniorApi.environment = ENVIRONMENTS.PROD;
    } else {
      this.seniorApi.environment = ENVIRONMENTS.DEV;
    }
    user.getToken().then((token) => {
      this.seniorApi.accessToken = token.access_token;
    });
  }
  getUser(): Observable<any> {
    return from(this.seniorApi.users.getUser());
  }
}
