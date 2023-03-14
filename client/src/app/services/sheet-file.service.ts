import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SheetFile } from '../models/sheetFile.model';

@Injectable({ providedIn: 'root' })
export class SheetFileService {
  constructor(private http: HttpClient) { }

  create(sheetFile: SheetFile, idToken: string) {
    return this.http.post<SheetFile>(
      environment.apiUrl + '/sheetfile',
      sheetFile,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }

  getSheetFiles(idToken: string, _id: string) {
    return this.http.get<SheetFile[]>(
      environment.apiUrl + '/sheetfile/user/' + _id,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }

  getEdittingSheetFile(idToken: string, _id: string) {
    return this.http.get<SheetFile>(
      environment.apiUrl + '/sheetfile/editting/' + _id,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }

  update(sheetFile: SheetFile, idToken: string) {
    return this.http.put<SheetFile>(
      environment.apiUrl + '/sheetfile/update',
      sheetFile,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }

  rename(sheetFile: SheetFile, idToken: string) {
    return this.http.put<SheetFile>(
      environment.apiUrl + '/sheetfile/rename',
      sheetFile,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }

  invite(sheetFile: SheetFile, idToken: string) {
    return this.http.put(
      environment.apiUrl + '/sheetfile/invite',
      sheetFile,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }

  findRequestList(idToken: string, _id: string) {
    return this.http.get<SheetFile[]>(
      environment.apiUrl + '/sheetfile/request/' + _id,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }
  acceptRequest(sheetFile: SheetFile, idToken: string, uid: string) {
    return this.http.put(
      environment.apiUrl + `/sheetfile/accept/${uid}`,
      sheetFile,
      { headers: new HttpHeaders({ Authorization: `${idToken}` }) }
    );
  }
}
