import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createUser(idToken:string){
    return this.http.post('http://localhost:6969/user', '',{ headers: new HttpHeaders({ 'Authorization': `${idToken}` }) });
  }

  getUserInfo(idToken:string){
    return this.http.get<User[]>('http://localhost:6969/user/info',{ headers: new HttpHeaders({ 'Authorization': `${idToken}` }) });
  }
}
