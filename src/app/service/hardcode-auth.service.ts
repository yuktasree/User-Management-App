import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username !== null && password === "pass123") {
      sessionStorage.setItem("userAuth", username);
      console.log(sessionStorage.getItem("userAuth"));
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn() {
    if (sessionStorage.getItem("userAuth") !== null)
      return true;
    else
      return false;
  }

  logout() {
    sessionStorage.removeItem("userAuth");
  }

}
