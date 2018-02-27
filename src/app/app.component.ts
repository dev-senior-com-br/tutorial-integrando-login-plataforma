import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { UserData } from "./user-data"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    AppService
]
})
export class AppComponent {
  title = 'app';
  userData = new UserData();
  constructor(private appService: AppService){ }

  getServiceUrl = function(){
    this.appService.getDadosUsuario().subscribe(data => {
      console.log(data)
      this.userData = data;
    });
  }
}
