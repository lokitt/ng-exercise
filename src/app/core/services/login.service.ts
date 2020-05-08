import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }


  public getLoginStatus(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }

  public setLoginStatus(isLoggedIn: boolean) {
    this.loginSubject.next(isLoggedIn);
  }

}
