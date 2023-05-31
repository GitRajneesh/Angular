import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='https://localhost:44308/user/authenticate';
  constructor(private http: HttpClient) { }
  proceedToLogin(userCred:any){
    return this.http.post(this.apiurl,userCred);
  }

}
