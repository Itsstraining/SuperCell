import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createUser(idToken:string){
    return this.http.post(environment.apiUrl + '/user', '',{ headers: new HttpHeaders({ 'Authorization': `${idToken}` }) });
  }

  getUserInfo(idToken:string){
    return this.http.get<User[]>(environment.apiUrl + '/user/info',{ headers: new HttpHeaders({ 'Authorization': `${idToken}` }) });
  }
}
