import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SMS } from "@ionic-native/sms";
import { StandOutView2Page } from "../stand-out-view2/stand-out-view2";

/**
 * Generated class for the StandOutView1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stand-out-view1",
  templateUrl: "stand-out-view1.html"
})
export class StandOutView1Page {
  base64Image = "../../assets/imgs/Android-Messages.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sms: SMS
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad StandOutView1Page");
  }

  sendSMS() {
    this.sms.send("+1-213-139-8945", "");
  }

  viewResume() {
    this.navCtrl.push(StandOutView2Page);
  }
}
