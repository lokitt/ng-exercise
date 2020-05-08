import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return combineLatest(
      this.http.get('https://reqres.in/api/users?page=1'),
      this.http.get('https://reqres.in/api/users?page=2'),
    )
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get('https://reqres.in/api/users/' + userId);
  }
 }
