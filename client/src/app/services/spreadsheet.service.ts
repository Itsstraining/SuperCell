import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
import { SheetFile } from '../models/sheetFile.model';

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetService {
  constructor(private socket: Socket) {}

  sendMessage(msg: any) {
    if (msg.user) {
      // console.log(`send message from ${msg.user.email} to fileId: `, msg._id);
      this.socket.emit('sheetfile', msg);
    }
    if (msg.change) {
      // console.log('change', msg);
      this.socket.emit('sheetfile', msg);
    }
    // else {
    //   console.log(msg.memory);
    //   this.socket.emit('sheetfile', msg);
    // }
  }

  getMessage(_id: string) {
    // console.log('join room', _id);
    return this.socket.fromEvent(`sheetfile-${_id}`).pipe(
      map((data: any) => {
        // console.log(data);
        return data;
      })
    );
  }

  listenClient(_id: string) {
    return this.socket.fromEvent(`clients`).pipe(
      map((data: any) => {
        // console.log(data);
        return data;
      })
    );
  }
}
