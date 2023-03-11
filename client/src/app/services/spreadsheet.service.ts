import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SheetFile } from '../models/sheetFile.model';


@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService 
{

  constructor(private socket: Socket, private http: HttpClient) { }

  getShareId(email:string)
  {
    return this.http.get('${environment.apiUrl}/sheetfile/id')
  }

  sendFile(newFileData: SheetFile)
  {
    this.http.post('${environment.apiUrl}/sheetfile', newFileData).subscribe((Response) => console.log(Response))

  }
}
