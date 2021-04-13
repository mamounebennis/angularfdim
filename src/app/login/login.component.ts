import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {AuthenticationService} from '../service/authentication.service';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mode = 0;
  moii: any;
  username: '';
  password: '';
  private usee: string;
  public ouruser: any;


  constructor(private authService: AuthenticationService, private router: Router,private service:ServiceService) {}

  ngOnInit(): void {}

  onLogin(formData) {
    this.authService.login(formData)
      .subscribe(resp => {
          localStorage.setItem("username", this.username);
          this.moii = localStorage.getItem("username");
          console.log(this.moii);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          });

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this.router.navigate(["/acceuil"]);
        },
        err => {
          this.mode = 1;
        })
  }

}
