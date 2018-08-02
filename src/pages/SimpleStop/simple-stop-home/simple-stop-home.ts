import { Component } from "@angular/core";
import { IonicPage, NavController, AlertController } from "ionic-angular";
import { SimpleStopPossibleProblemsPage } from "../simple-stop-possible-problems/simple-stop-possible-problems";
import { HomePage } from "../../home/home";

@IonicPage()
@Component({
  selector: "page-simple-stop-home",
  templateUrl: "simple-stop-home.html"
})
export class SimpleStopHomePage {
  public first = true;
  public carBrand = "honda";
  public productionYear = "b";
  public carModel = "Civic";
  hiddenCounter = 0;
  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public navController: NavController
  ) {}

  hiddenHome() {
    this.hiddenCounter++;
    if (this.hiddenCounter >= 3) {
      this.navCtrl.setRoot(HomePage);
    }
    console.log("pressed " + this.hiddenCounter + " times");
  }

  models = [
    "Tacoma",
    "Corolla",
    "Prius",
    "Altima",
    "Sentra",
    "Murano",
    "Civic",
    "Accord",
    "CR-V",
    "C-Class",
    "G-Class",
    "E-Class",
    "Sonata",
    "Tucson",
    "Elantra"
  ];
  carModels = ["model1", "model2", "model3"];
  movePage() {
    this.navCtrl.push(SimpleStopPossibleProblemsPage);
    console.log("page moved");
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Car Vin Number",
      subTitle: "A vin is blah blah ",
      buttons: ["Dismiss"]
    });
    alert.present();
  }

  onChange(e) {
    this.first = false;
    console.log(e);
    if (e == "toyota") {
      this.carModels[0] = this.models[0];
      this.carModels[1] = this.models[1];
      this.carModels[2] = this.models[2];
    } else if (e == "nissan") {
      this.carModels[0] = this.models[3];
      this.carModels[1] = this.models[4];
      this.carModels[2] = this.models[5];
    } else if (e == "honda") {
      this.carModels[0] = this.models[6];
      this.carModels[1] = this.models[7];
      this.carModels[2] = this.models[8];
    } else if (e == "mercedes") {
      this.carModels[0] = this.models[9];
      this.carModels[1] = this.models[10];
      this.carModels[2] = this.models[11];
    } else if (e == "hyundai") {
      this.carModels[0] = this.models[12];
      this.carModels[1] = this.models[13];
      this.carModels[2] = this.models[14];
    }
  }

  prob: SimpleStopPossibleProblemsPage;
}
