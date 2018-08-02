import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StandOutView1Page } from "../stand-out-view1/stand-out-view1";
import { StandOutActorProfilePage } from "../stand-out-actor-profile/stand-out-actor-profile";

@IonicPage()
@Component({
  selector: "page-stand-out-agent",
  templateUrl: "stand-out-agent.html"
})
export class StandOutAgentPage {
  View1Page;
  View2Page;
  ActorProfilePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.View1Page = StandOutView1Page;
    this.ActorProfilePage = StandOutActorProfilePage;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StandOutAgentPage");
  }
}
