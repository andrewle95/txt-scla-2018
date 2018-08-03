import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  InAppBrowser,
  InAppBrowserOptions,
  InAppBrowserEvent
} from "@ionic-native/in-app-browser";
import { VidConnectRatingPage } from "../vid-connect-rating/vid-connect-rating";

/**
 * Generated class for the VidConnectProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-vid-connect-profile",
  templateUrl: "vid-connect-profile.html"
})
export class VidConnectProfilePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public iab: InAppBrowser
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad VidConnectProfilePage");
  }

  open() {
    console.log("open");
    const options: InAppBrowserOptions = {
      hardwareback: "yes"
    };
    const browser = this.iab.create(
      "facetime://ernestopimentel1@gmail.com",
      "_system",
      options
    );
    //   browser.on('loadstop').subscribe(event => {
    //     console.log('facetime')
    //  });
    setTimeout(() => {
      this.navCtrl.push(VidConnectRatingPage);
    }, 3000);
  }
}
