import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInfo: any;
  isUserLoggedIn: boolean;

  constructor(
    private gp: GooglePlus
  ) { }

  loginWithGP() {
    this.gp.login({}).then(res => {
      this.userInfo = res;
      this.isUserLoggedIn = true;
    }).catch(err => console.log(err));
  }
  logout() {
    this.gp.logout().then(() => {
      this.isUserLoggedIn = false;
    });
  }
}
