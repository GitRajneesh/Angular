import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='https://localhost:44308/user/authenticate';
  constructor(private http: HttpClient) { }

 /**
  * The function sends a POST request to the specified API URL with user credentials as the payload.
  * @param {any} userCred - It is a parameter that represents the user's login credentials such as
  * username and password. It is used in the HTTP POST request to authenticate the user and log them
  * in.
  * @returns The function `proceedToLogin` is returning an HTTP POST request to the API URL with the
  * user credentials passed as a parameter.
  */
  proceedToLogin(userCred:any){
    return this.http.post(this.apiurl,userCred);
  }

 /**
  * The function checks if there is a token stored in the browser's local storage and returns a boolean
  * value indicating whether the user is logged in or not.
  * @returns The function `isLoggedIn()` is returning a boolean value. It will return `true` if the
  * value of the `token` key in the `localStorage` object is not `null`, indicating that the user is
  * currently logged in. Otherwise, it will return `false`.
  */
  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  getToken(){
    return localStorage.getItem('token')|| '' ;
   }

   /**
    * This function checks if the user has admin access based on their token stored in local storage.
    * @returns a boolean value. If the role of the user is 'admin', it returns true, otherwise it
    * returns false and displays an alert message.
    */
   HaveAccess(){
    var loggintoken=localStorage.getItem('token')||'';
    var _extractedtoken=loggintoken.split('.')[1];
    var _atobdata=atob(_extractedtoken);
    var _finaldata=JSON.parse(_atobdata);
    if(_finaldata.role=='admin'){
      return true
    }else{
      alert('you not having access');
      return false
    }
  }

}
