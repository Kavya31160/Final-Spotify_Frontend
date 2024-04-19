import { Component,OnInit } from '@angular/core';
import { AuthService } from '../app.service';
import { Track } from '../wishlist/track';
import { Wishlist } from '../wishlist/wishlist';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { Recommendation } from './Recommendation';
import { Router } from '@angular/router'; 
import{ faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})

export class MusicComponent implements OnInit {
  icon=faHeart;
  data: Recommendation[] = [];
  constructor(private AuthService: AuthService, private wishlist:WishlistComponent,private router:Router){
  } 
 //page loads without any action
  ngOnInit() {this.getMusic()}

  getMusic(){  
    this.AuthService.getMusic().subscribe(response=>{
     
      this.data=response;
      console.log(response);
    },
      error => console.log(error));
  
  }
  
  onSearch(){
   this.getMusic();
     
  }
  addTrack(track:Recommendation){
    console.log(track)
    this.wishlist.addTrack(track).subscribe(response=>{
      
    let tracks= response.tracks.map(track=> track.trackId);
     this.data.forEach(track=>{
       if(tracks.includes(track.id)){
         track.isAdded=true; 
       }
     }) 
      console.log(response);
      
      // this.router.navigateByUrl('/wishlist')
    },
      error => console.log(error));  
  }
  
}
