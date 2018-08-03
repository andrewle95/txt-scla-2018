import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { VidConnectHomePage } from "../vid-connect-home/vid-connect-home";

@IonicPage()
@Component({
  selector: "page-vid-connect-rating",
  templateUrl: "vid-connect-rating.html"
})
export class VidConnectRatingPage {
  public activeStars = [false, false, false, false, false];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RatingPage");
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

  open() {
    this.navCtrl.setRoot(VidConnectHomePage);
  }
}
