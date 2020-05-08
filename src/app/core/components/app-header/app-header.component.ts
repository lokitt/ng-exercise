import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
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

  signup() {
    this.loginService.setLoginStatus(true);
  }

  logout() {
    this.loginService.setLoginStatus(false);
  }
}
