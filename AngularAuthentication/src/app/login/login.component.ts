import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  messageclass = '';
  message = '';
  Customerid: any;
  editdata: any;
  responsedata: any;
  constructor(private _authService: AuthService,private route:Router) {
    localStorage.clear();
  }
  Login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}
 /**
  * The function checks if the login form is valid and proceeds to log in the user if it is.
  */
  ProceedLogin() {
    if(this.Login.valid){
this._authService.proceedToLogin(this.Login.value).subscribe(result=>{
  if(result!=null){
    this.responsedata = result;
    localStorage.setItem('token',this.responsedata.jwtToken);
    this.route.navigate([]);
  }
});
    }
  }
}
