import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersListComponent implements OnInit {

  public usersList;
  public displayedColumns : string[] = ['id', 'first_name', 'last_name'];

  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(resp => {
      this.usersList = resp[0].data.concat(resp[1].data);
    })
  }

  public onUserSelect(userId) {
    this.router.navigateByUrl('user-detail/' + userId)
  }
}

