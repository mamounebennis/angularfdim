import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";

import {environment} from '../../environments/environment';
const BACKEND_URL = environment.baseURL;


@Injectable()
export class AuthenticationService{
  private jwtToken:string;
  private roles:Array<any>=[];
  constructor(private http:HttpClient){}
  login(user){
    return this.http.post(BACKEND_URL+"/login",user,{ observe: 'response'
    });
  }
  register(user){
    return this.http.post(BACKEND_URL+"/register",user);
  }

  saveToken(jwtToken){
    this.jwtToken=jwtToken;
    localStorage.setItem("",jwtToken);
    let jwtHelper=new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
  }
  loadToken(){
    this.jwtToken=localStorage.getItem('username');
    return this.jwtToken;
  }
  logout(){
    localStorage.removeItem('username');
  }
  isAdmin(){
    for(let r of this.roles){
      if(r.authority=='ADMIN') return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('username');
  }
}
