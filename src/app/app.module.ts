import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicsProvider } from '../providers/musics/musics';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Media } from '@ionic-native/media';
import { MusicPlayerPage } from '../pages/music-player/music-player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MusicsProvider,
    SocialSharing,
    Media
  ]
})
export class AppModule { }
