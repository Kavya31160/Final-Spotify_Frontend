import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommendation } from '../music/Recommendation';
import { Track } from './track';
import { Wishlist } from './wishlist';
import{ faTrashCan } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class WishlistComponent implements OnInit {
  data: any;
icon=faTrashCan ;
  baseUrl = "http://localhost:8084/wishlist/"
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.getWishlist();
  } 
  addTrack(track: Recommendation): Observable<Wishlist> {
    console.log(track)

    let userId = sessionStorage.getItem("userId")
    let token = sessionStorage.getItem("token")
    let requestBody = {

      "userId": userId,
      "tracks": [
        {
          "trackId": track.id,
          "trackName": track.name,
          "trackUrl": track.href,
          
        }
      ]
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const url = this.baseUrl + "addTrack";
    return this.httpClient.post<Wishlist>(url, requestBody, { headers });
  }
  getWishlist() {
    let userId = sessionStorage.getItem("userId")
    let token = sessionStorage.getItem("token")

    const url = this.baseUrl + "getTracks/" + userId;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.httpClient.get(url, { headers }).subscribe(response => {
      let wishlist= JSON.parse(JSON.stringify(response))
     
      this.data = wishlist.tracks;
      sessionStorage.setItem("wishlistId", wishlist.wishlistId)
      console.log(response);
    },
      error => console.log(error)); 
  }
  
  removeTrack(track: any) {
    console.log(track);

    let token = sessionStorage.getItem("token")
    let wishlistId = sessionStorage.getItem("wishlistId")

    const url = this.baseUrl + "removeTrack?wishlistId=" + wishlistId + "&trackId=" + track.trackId;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    this.httpClient.delete(url, { headers }).subscribe(() => {
     this.data =[... this.data.filter((item: { trackId: any; }) => track.trackId != item.trackId)]
      console.log(this.data);
    },
      error => console.log(error));


  }

}
