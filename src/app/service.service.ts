import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }




  public select(url, data) {
    return this.httpClient.put(url, data);
  }

  public getuser(url) {
    return this.httpClient.get(url);
  }

  public getcour(url) {
    return this.httpClient.get(url);
  }

  public getcourss(url) {
    return this.httpClient.get(url);
  }

  public addcours(url, data) {
    return this.httpClient.post(url, data);
  }


  public DeleteCompte(url){
    return this.httpClient.delete(url);
  }
}
