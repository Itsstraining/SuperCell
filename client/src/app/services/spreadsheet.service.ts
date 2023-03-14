import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
import { SheetFile } from '../models/sheetFile.model';


@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {

  constructor(private socket: Socket) { }

  sendMessage(file: SheetFile) {
    console.log('send message', file._id);
    this.socket.emit('sheetfile', file);
  }

  getMessage(_id: string) {
    console.log('join room', _id);
    return this.socket.fromEvent(`sheetfile-${_id}`).pipe(map((data: any) => {
      // console.log(data);
      return data;
    }));
  }
}
