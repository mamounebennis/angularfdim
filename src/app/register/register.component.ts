import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any;
  mode:number=0;
  errorMessage:string;
  username: '';
  name: '';
  password: '';
  categorie: '';
  imgURL: any;
  userFile;
  public imagePath;
  public file;
  repassword: any;

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  onRegister(user){

    this.authService.register(user)
      .subscribe(data=>{
          this.user=data;
          this.mode=1;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your account has been saved',
            showConfirmButton: false,
            timer: 3500
          })
          this.router.navigateByUrl("/login");
        },
        err=>{
          this.errorMessage=err.error.message;
          this.mode=0;
        })
  }

}
