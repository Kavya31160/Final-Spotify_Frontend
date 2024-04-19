import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faRightFromBracket,faHouse } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../app.service';


@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  icon=faRightFromBracket;
  home=faHouse;
  constructor(private router : Router,private authservice:AuthService){}
  getLoginStatus(){
    if(sessionStorage.getItem("userId") ){
      return true;
    }
    else {
      return false;
    } 
  }
  logout(){
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    this.router.navigate(['/home'])
  }

}
