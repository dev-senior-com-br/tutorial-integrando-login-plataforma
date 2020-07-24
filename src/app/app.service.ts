import { Injectable } from '@angular/core'; 
import { service, user } from '@seniorsistemas/senior-platform-data'; 
import { SeniorApi, ENVIRONMENTS } from "@seniorsistemas/senior-core";
import { Observable, forkJoin, from } from 'rxjs'; 
import { concatMap } from 'rxjs/operators'; 
import { environment } from "../environments/environment";

@Injectable() export class AppService { 
  private seniorApi: SeniorApi;
  constructor() {
    this.seniorApi = new SeniorApi();
    if(environment.production) {
      this.seniorApi.environment = ENVIRONMENTS.PROD
    } else {
      this.seniorApi.environment = ENVIRONMENTS.DEV
    }
  }
  getUser(): Observable<any> { 
    return from(user.getToken())
      .pipe(
        concatMap(token => { 
          this.seniorApi.accessToken = token.access_token;
          return from(this.seniorApi.users.getUser());
        })
      );
  } 
}