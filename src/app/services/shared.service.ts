import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppState {
  private profile = new BehaviorSubject(null);
  profile$ = this.profile.asObservable();

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      console.log('user----------------------')
      console.log(user)
      const { username } = JSON.parse(user);
      this.setProfile(username);
    }
  }

  public setProfile(username: null): void {
    this.profile.next(username);
    if (username === null){
      localStorage.removeItem('user');
    } else {
      const user = { username, jwt: `jwt-${username}` };
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
}