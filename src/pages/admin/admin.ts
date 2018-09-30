

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm';
import { SignUpPage } from '../sign-up/sign-up';
import { AngularFireAuth } from 'angularfire2/auth';
import { ShowPage } from '../show/show';
import { AddNewPage } from '../add-new/add-new';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  titlefirebase:'';
  bodyfirebase:'';


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public myAuth: AuthServiceProvider,
public alertCtrl: AlertController,private fcm:FCM ) {
  }

  firebaseMessage(){
    this. fcm.getToken().then(token => {
      //alert(token);
     });
     
     this.fcm.onNotification().subscribe(data => {
       if(data.wasTapped){
         console.log("Received in background");
       alert(data.title+ " / "+ data.body);
       this.titlefirebase=data.title;
       this.bodyfirebase=data.body;
       } else {
         console.log("Protect kindergarten");
        alert("Protect kindergarten");
       };
     });
     
  ;
     
   }
  goBack(){
  this.navCtrl.push(HomePage)

  console.log('goBackIsClicked')
}

  notice(){
    this.notify.schedule({
      id: 1,
      text: 'hi from admin',
      title: 'your notify'
      // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      // data: { secret: this.addkid }
    });
  }

  add(){
    if (this.authi.auth.currentUser) {
      this.navCtrl.push(AddNewPage)
    console.log("Added")
    }
    else{
      console.log("no auth")
      this.showAlert()

    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'تنبيه',
      subTitle: 'عفوا لم تقم بتسجيل الدخول',
      buttons: ['OK']
    });
    alert.present();
  }

  show(){
    this.navCtrl.push(ShowPage)
    console.log("Showed")
  }

  signOut(){
    this.myAuth.signOut()
    this.navCtrl.setRoot(HomePage)
  }

  SignUp(){
    this.navCtrl.push(SignUpPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
