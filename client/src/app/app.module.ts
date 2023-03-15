import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share/share.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from '../app/reducers/auth.reducer';
import { AuthEffects } from 'src/app/effects/auth.effect';
import { userReducer } from '../app/reducers/user.reducer';
import { UserEffects } from 'src/app/effects/user.effect';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SheetFileEffects } from '../app/effects/sheetFile.effect';
import { sheetFileReducer } from '../app/reducers/sheetFile.reducer';
import { sheetReducer } from '../app/reducers/sheet.reducer';

const config: SocketIoConfig = { url: 'http://localhost:6969', options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    ShareModule,
    StoreModule.forRoot(
      {
        auth: authReducer,
        user: userReducer,
        sheetFile: sheetFileReducer,
        sheet: sheetReducer,
      },
      {}
    ),
    EffectsModule.forRoot([AuthEffects, UserEffects, SheetFileEffects]),
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
