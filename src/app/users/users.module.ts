import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users.component';
import {MatTableModule} from '@angular/material/table';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UsersListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class UsersModule { }
