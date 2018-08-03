import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TunnelsGamePage } from "../tunnels-game/tunnels-game";
import { HomePage } from "../../home/home";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

@IonicPage()
@Component({
  selector: "page-tunnels-home",
  templateUrl: "tunnels-home.html"
})
export class TunnelsHomePage {
  hiddenCounter = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TunnelsHomePage");
  }

  start() {
    this.navCtrl.push(TunnelsGamePage);
  }

  hiddenHome() {
    this.hiddenCounter++;
    if (this.hiddenCounter >= 3) {
      this.navCtrl.setRoot(HomePage);
    }
    console.log("pressed " + this.hiddenCounter + " times");
  }
}
