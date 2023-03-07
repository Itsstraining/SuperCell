import { Component, OnInit } from '@angular/core';
import { SheetFile } from 'src/app/models/sheetFile.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sheetFiles: SheetFile[] = [
    {
      _id: '1',
      title: 'Sheet 1',
      created_At: 123456789,
      updated_At: 123456789,
      owner: {
        _id: '1',
        name: 'John Doe',
        uid: '123456789',
        email: 'hehe@gmail.com',
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinteres'
      },
      shared: [],
      content: []
    },
    {
      _id: '2',
      title: 'Sheet 2',
      created_At: 123456789,
      updated_At: 123456789,
      owner: {
        _id: '1',
        name: 'John Doe',
        uid: '123456789',
        email: '',
        picture: ''
      },
      shared: [],
      content: []
    },
    {
      _id: '3',
      title: 'Sheet 3',
      created_At: 123456789,
      updated_At: 123456789,
      owner: {
        _id: '1',
        name: 'John Doe',
        uid: '123456789',
        email: '',
        picture: ''
      },
      shared: [],
      content: []
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
