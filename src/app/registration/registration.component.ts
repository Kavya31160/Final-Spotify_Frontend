import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AuthService } from '../app.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  UserForm!: FormGroup;
    user: User = new User();
   
    constructor(private formBuilder: FormBuilder, private AuthService: AuthService,private router:Router) {}
   
    ngOnInit() {
      this.UserForm = this.formBuilder.group({
        id: [this.user.id, Validators.required],
        mobile: [this.user.mobile, [Validators.required, Validators.pattern('^[0-9]+$')]],
        firstname: [this.user.firstname,[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        lastname: [this.user.lastname, [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        useremail: [this.user.useremail, [Validators.required, Validators.email]],
        // password: [this.user.password, Validators.required],
          password: ['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/)]],
   
        // ... other form controls ...
      });
    }
   
    PostUser() {
      this.AuthService.addUser(this.UserForm.value).subscribe(
        (data) => {
          console.log(data);
          alert('User Stored successfully');
         
          this.router.navigateByUrl('/login')
   
        },
        (error) => {
          console.log(error);
        }
      );
    }
   
    onSubmit() {
      // console.log(this.UserForm.value);
      console.log(this.user);
      this.PostUser();
          

    }
    markFormGroupTouched(formGroup: FormGroup) {
      Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
   
        if (control instanceof FormGroup) {
          this.markFormGroupTouched(control);
        }
      });
    }
  }
   


















// user : User = new User();
// constructor(private AuthService: AuthService,private router:Router){

// }

// PostUser(){
//   this.AuthService.addUser(this.user).subscribe(data=>{
//     console.log(data);
//   this.router.navigate(['/login'])
//        },
//   error => console.log(error));
// }

// onSubmit(){
//   console.log(this.user);
//   this.PostUser();
// }


// }