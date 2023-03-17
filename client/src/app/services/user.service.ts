import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { SheetFile } from '../models/sheetFile.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private socket: Socket) {}

  createUser(idToken: string) {
    return this.http.post(environment.apiEndpoint + '/user', '', {
      headers: new HttpHeaders({ Authorization: `${idToken}` }),
    });
  }

  getUserInfo(idToken: string) {
    return this.http.get<User>(environment.apiEndpoint + '/user/info', {
      headers: new HttpHeaders({ Authorization: `${idToken}` }),
    });
  }

  getUserInfoByEmail(email: string | null, idToken: string) {
    return this.http.get<User>(
      environment.apiEndpoint + '/user/email/' + email,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }
}
