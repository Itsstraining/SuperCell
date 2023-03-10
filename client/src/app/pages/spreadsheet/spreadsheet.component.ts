import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserState } from 'src/states/user.state';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent {
  user$ = this.store.select('user', 'user');
  subscription!: Subscription;
  user: User = <User>{};
  constructor(private store: Store<{ user: UserState }>) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.user$.subscribe((user) => {
      if (user) {
        console.log(user);
        this.user = user;
      }
    });
  }
}
