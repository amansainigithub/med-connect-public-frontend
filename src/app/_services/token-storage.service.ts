import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    localStorage.removeItem("TOKEN_KEY");
    localStorage.removeItem("USER_KEY");
  }

  public saveToken(token: string): void {
    localStorage.setItem("TOKEN_KEY",token);
    var tokean=localStorage.getItem("TOKEN_KEY");
  }

  public getToken(): string | null {
    return localStorage.getItem("TOKEN_KEY");
  }

  public saveUser(user: any): void {
    localStorage.setItem("USER_KEY",JSON.stringify(user));
  }

  public getUser(): any {
    const user= localStorage.getItem("USER_KEY");
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn()
  { 
    var access_token= localStorage.getItem("TOKEN_KEY");
    if(access_token == null)
    {
      return false;
    }
    else
    {
      return true;
    }

  }

  // signOut(): void {
  //   window.sessionStorage.clear();
  // }

  // public saveToken(token: string): void {
  //   window.sessionStorage.removeItem(TOKEN_KEY);
  //   window.sessionStorage.setItem(TOKEN_KEY, token);
  // }

  // public getToken(): string | null {
  //   return window.sessionStorage.getItem(TOKEN_KEY);
  // }

  // public saveUser(user: any): void {
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  // }

  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_KEY);
  //   if (user) {
  //     return JSON.parse(user);
  //   }

  //   return {};
  // }
}
