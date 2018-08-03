import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TunnelsHomePage } from "../tunnels-home/tunnels-home";

/**
 * Generated class for the TunnelsGameDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tunnels-game-done",
  templateUrl: "tunnels-game-done.html"
})
export class TunnelsGameDonePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TunnelsGameDonePage");
  }

  home() {
    this.navCtrl.setRoot(TunnelsHomePage);
  }
}
