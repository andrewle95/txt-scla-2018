import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NorProAboutPage } from "../nor-pro-about/nor-pro-about";

/**
 * Generated class for the NorProMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-nor-pro-main",
  templateUrl: "nor-pro-main.html"
})
export class NorProMainPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad NorProMainPage");
  }

  customerBut() {
    this.navCtrl.push(NorProAboutPage);
  }
}
