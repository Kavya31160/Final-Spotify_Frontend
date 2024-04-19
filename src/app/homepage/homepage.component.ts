import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  getLoginStatus(){
    if(localStorage.getItem("userId") ){
      return true;
    }
    else {
      return false;
    }
  }
}
