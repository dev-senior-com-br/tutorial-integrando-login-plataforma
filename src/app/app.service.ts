import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { service, user } from 'gianpasqualini-platform-data';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  

  getDadosUsuario() : Observable < any > {
    return Observable.forkJoin(
        Observable.fromPromise(service.getRestUrl()),
        Observable.fromPromise(user.getAuthHeader()),
    ).flatMap((values: any) => {
        const [bridgeUrl, authHeader] = values;
        let headers = new HttpHeaders({
            "Authorization": authHeader
        });
        return this.http.get < any > (`${bridgeUrl}usuarios/userManager/queries/obterMeusDados`,{headers}); ;
    });
  }


}