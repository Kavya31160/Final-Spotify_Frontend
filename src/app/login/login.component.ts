import { Component } from '@angular/core';
import { Login } from './login';
import { AuthService } from '../app.service';
import { JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public UserInfo: any;
  login: Login = new Login();
  
  constructor(private AuthService: AuthService,private router:Router) {
  }
  LoginUser() {
    if(this.login.useremail&& this.login.password){
    this.AuthService.loginUser(this.login).subscribe(data => {

      this.UserInfo = JSON.stringify(data);

       const jsonObject = JSON.parse(this.UserInfo);

     sessionStorage.setItem("token",jsonObject.token);
     sessionStorage.setItem("userId",jsonObject.userId);

      console.log(data);
      // alert("Succlefully logged in! welcome")
        this.router.navigateByUrl('/music')
      
    },


      error => {
      
        console.log(error)
        alert("Please enter the correct email and password!")});
        

  }
  else {
    alert('please fill in all the feilds!!')
}

}

  Onlogin() {
    console.log(this.login);
    this.LoginUser();
  }



}
