import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthencticationService {

  constructor() { }
  isLoggedIn() {

    const token = localStorage.getItem('username');

}
}