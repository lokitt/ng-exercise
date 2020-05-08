import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId;
  user;

  constructor(private route: ActivatedRoute,
    private userService: UsersService,
    private location: Location) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("userId");
    this.userService.getUserById(this.userId).subscribe(resp=>{
      if(resp.data) this.user = resp.data;
    })
  }

  public goBack() {
    this.location.back();
  }

}
