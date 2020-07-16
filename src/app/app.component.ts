import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { UserData } from "./user-data"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    AppService
  ]
})
export class AppComponent {
  userData = new UserData();
  constructor(private appService: AppService) { }

  getLoggedUser = function () {
    this.appService.getUser().subscribe((data: any) => {
      this.userData = data;
    });
  }
}