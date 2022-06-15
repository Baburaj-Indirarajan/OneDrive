import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
  crypto: any;

  constructor(private oneSignal: OneSignal) {
    debugger;
    this.oneSignal.init({
      appId: 'fa581bbc-9a1b-4df8-9cf4-0a2a6c0b4ddd',
      autoRegister: false,
      /*allowLocalhostAsSecureOrigin: true,*/
      notifyButton: {
        enable: false
      }
    }); 

    this.Register();
  }

  Register() {

   
    this.oneSignal.isPushNotificationsEnabled().then((issupport) => {

      if (issupport) {
        console.log("Supported");
        this.oneSignal.getExternalUserId().then((user) => {
          if (user == null) {
            this.oneSignal.setExternalUserId("febe169a-a84d-46a8-b55f-e683c56ae31e", "62fb3e6e11e45c8f52a72273c1ad3b673b3244d35c32cba5f06fd6b5d2420ab3");
          }
          else {

            console.log("User is  Registered" + user);
          }
        });


      }
      else {
        this.oneSignal.showHttpPrompt();
        console.log("Not Supported");
      }
    });


  }
}



