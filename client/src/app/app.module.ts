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
import { authReducer } from 'src/reducers/auth.reducer';
import { AuthEffects } from 'src/effects/auth.effect';
import { userReducer } from 'src/reducers/user.reducer';
import { UserEffects } from 'src/effects/user.effect';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SheetFileEffects } from 'src/effects/sheetFile.effect';
import { sheetFileReducer } from 'src/reducers/sheetFile.reducer';
import { sheetReducer } from 'src/reducers/sheet.reducer';

const config: SocketIoConfig = { url: 'http://localhost:6969', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    ShareModule,
    StoreModule.forRoot({
      auth: authReducer,
      user: userReducer,
      sheetFile: sheetFileReducer,
      sheet: sheetReducer
    }, {}),
    EffectsModule.forRoot([
      AuthEffects,
      UserEffects,
      SheetFileEffects
    ]),
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
