import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AdminPage } from '../pages/admin/admin';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth} from '@angular/fire/auth';


import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KidsServiceProvider } from '../providers/kids-service/kids-service';
import { ShowPage } from '../pages/show/show';
import { AddNewPage } from '../pages/add-new/add-new';

export const fireconfig = {
  apiKey: "AIzaSyCe3H4pnxDfcXWnDjPnpAxNre6dX3FFylc",
  authDomain: "kidsionic.firebaseapp.com",
  databaseURL: "https://kidsionic.firebaseio.com",
  projectId: "kidsionic",
  storageBucket: "kidsionic.appspot.com",
  messagingSenderId: "954449921695"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShowPage,
    AddNewPage,
    AdminPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireconfig),
    AngularFireDatabaseModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  AdminPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KidsServiceProvider
  ]
})
export class AppModule {}
