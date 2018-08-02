import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StandOutAgentPage } from "../stand-out-agent/stand-out-agent";
import { HomePage } from "../../home/home";

/**
 * Generated class for the StandOutActorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stand-out-actor-profile",
  templateUrl: "stand-out-actor-profile.html"
})
export class StandOutActorProfilePage {
  AgentPage;
  hiddenCounter = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AgentPage = StandOutAgentPage;
  }

  hiddenHome() {
    this.hiddenCounter++;
    if (this.hiddenCounter >= 3) {
      this.navCtrl.setRoot(HomePage);
    }
    console.log("pressed " + this.hiddenCounter + " times");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StandOutActorProfilePage");
  }
}
