import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';
@Injectable({
  providedIn: 'root'
})
export class SilverbayAppService {

  readonly authURL = "http://localhost:7090/api/Authentication";
  constructor(private http:HttpClient) { }

  loginData: Login = new Login();
  registerData: Register = new Register();

  loginUser(){
    return this.http.post(`${this.authURL}/login`,this.loginData,{
      headers:new HttpHeaders({
        "Content-Type":"application/json"
      })
    });
  }

  registerUser(){
    return this.http.post(`${this.authURL}/register`,this.registerData,{
      headers:new HttpHeaders({
        "Content-Type":"application/json"
      })
    });
  }



}
