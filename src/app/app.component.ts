import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { UserData } from "./user-data"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = new UserData();

  constructor(private appService: AppService) { }

  getLoggedUser() {
    this.appService.getUser().subscribe((res: any) => {
      this.userData = res.data;
    });
  }

}