import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SimpleStopHomePage } from "../simple-stop-home/simple-stop-home";

/**
 * Generated class for the SimpleStopResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-simple-stop-results",
  templateUrl: "simple-stop-results.html"
})
export class SimpleStopResultsPage {
  public items = [
    {
      icon: '<i class="fas fa-battery-three-quarters"></i>',
      title: "Discharged Battery",
      preview:
        "A discharged battery is when internal chemical reaction reduces the stord charge in a battery. ",
      pic: "assets/simple-stop/battery.jpg",
      cost: "Between $100",
      cost2: "and $200",
      desc:
        "The possible problems can lead to shortened battery life, battery engine leak, and a reduced power of battery.",
      id: "battery"
    },
    {
      icon: '<i class="fas fa-thermometer-three-quarters"></i>',
      title: "Broken Thermostat",
      preview:
        "A piece of a car between the engine and the radiator and it reduces engine war deposits and emissions",
      pic: "assets/simple-stop/thermostat.jpg",
      cost: "Between $170",
      cost2: "and $208",
      desc:
        "The possible problems can lead to overheating, poor engine performance, and vibration when shifting gears.",
      id: "thermostat"
    },
    {
      icon: '<i class="fas fa-tint"></i>',
      title: "Leaking Coolant System",
      preview:
        "Green or orange liquid coming from a car may indicate a coolant leak",
      pic: "assets/simple-stop/coolant.jpg",
      cost: "Between $50",
      cost2: "and $80",
      desc:
        "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
      id: "coolant"
    }
  ];

  public currentItem;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const id = this.navParams.get("id");

    if (id && id.trim() != "") {
      this.currentItem = this.items.filter(item => {
        if (item.id === id) {
          return item;
        }
      });
      this.currentItem = this.currentItem[0];
    }
  }

  home() {
    this.navCtrl.setRoot(SimpleStopHomePage);
  }
}
