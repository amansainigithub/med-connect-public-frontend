import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/med-connect/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signInUser', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, firstname: string, surname: string,selected:any): Observable<any> {

    const regForm = {
      username,
      email,
      firstname,
      surname,
      password, 
      "role": [
        selected
      ],
    }

    return this.http.post(AUTH_API + 'signUpUser', regForm, httpOptions);
  }


  forgetPassword(data:any)
  {
    return  this.http.post(AUTH_API + "forgotPassword",data);
  }


  forgotPasswordOtpVerify(data:any)
  {
    return  this.http.post(AUTH_API + "forgotPasswordOtpVerify",data);
  }

  resendEmailLink(username:any): Observable<any> {
      return this.http.post(AUTH_API + 'resendEmailLink/'+username, httpOptions);
  }
  



}
