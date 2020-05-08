import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getLoginStatus().subscribe(resp => {
      this.isLoggedIn = resp;
    })
  }

  login() {
    this.loginService.setLoginStatus(true);
  }

  logout() {
    this.loginService.setLoginStatus(false);
  }
}
