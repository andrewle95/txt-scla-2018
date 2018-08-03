import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { VidConnectProfilePage } from "../vid-connect-profile/vid-connect-profile";

@IonicPage()
@Component({
  selector: "page-vid-connect-home",
  templateUrl: "vid-connect-home.html"
})
export class VidConnectHomePage {
  public activeStars = [false, false, false, false, false];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad VidConnectHomePage");
  }

  openPage() {
    this.navCtrl.push(VidConnectProfilePage);
  }

  activateStars(num) {
    if (num === 1) {
      this.activeStars = [true, false, false, false, false];
    } else if (num === 2) {
      this.activeStars = [true, true, false, false, false];
    } else if (num === 3) {
      this.activeStars = [true, true, true, false, false];
    } else if (num === 4) {
      this.activeStars = [true, true, true, true, false];
    } else if (num == 5) {
      this.activeStars = [true, true, true, true, true];
    }
  }
}
