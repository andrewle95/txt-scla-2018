import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { SimpleStopResultsPage } from "../simple-stop-results/simple-stop-results";
import { SimpleStopHomePage } from "../simple-stop-home/simple-stop-home";

interface Items {
  icon: any;
  title: any;
  preview: any;
  id: any;
  pic: any;
  cost: any;
  desc: any;
}

@IonicPage()
@Component({
  selector: "page-simple-stop-possible-problems",
  templateUrl: "simple-stop-possible-problems.html"
})
export class SimpleStopPossibleProblemsPage {
  searchQuery: string = "";
  items: Items[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {
        icon: '<img src="assets/simple-stop/probs/6.png"/>',
        title: "Dead Battery",
        preview:
          "A discharged battery is when internal chemical reaction reduces the stored charge in a battery. ",
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $238",
        desc:
          "The possible problems can lead to shortened battery life, Battery engine leak, and a reduced power of a battery.",
        id: "battery"
      },
      {
        icon: '<img src="assets/simple-stop/probs/2.png"/>',
        title: "Broken Thermostat",
        preview:
          "A piece of a car between the engine and the radiator that reduces engine wear deposits and emissions.",
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $204",
        desc:
          "The possible problems can lead to overheating, poor engine performance, and vibration when shifting gears.",
        id: "thermostat"
      },
      {
        icon: '<img src="assets/simple-stop/probs/3.png"/>',
        title: "Leaking Coolant System",
        preview:
          "Green or orange liquid coming from a car may indicate a coolant leak",
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $80",
        desc:
          "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
        id: "coolant"
      },
      {
        icon: '<img src="assets/simple-stop/probs/4.png"/>',
        title: "Burnt Radiator",
        preview:
          "Green or orange liquid coming from a car may indicate a coolant leak",
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $80",
        desc:
          "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
        id: "coolant"
      },
      {
        icon: '<img src="assets/simple-stop/probs/5.png"/>',
        title: "Broken Fuel Filter",
        preview:
          "Green or orange liquid coming from a car may indicate a coolant leak",
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $80",
        desc:
          "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
        id: "coolant"
      },
      {
        icon: '<img src="assets/simple-stop/probs/1.png"/>',
        title: "Clogged Hose",
        preview:
          "Green or orange liquid coming from a car may indicate a coolant leak",
        pic: "assets/imgs/engine.jpg",
        cost: "the average cost is $80",
        desc:
          "The possible problems can lead to overheating, excessive noise, and it will break your heater core.  ",
        id: "coolant"
      }
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter(item => {
        return item.id.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  clickItem(id) {
    this.navCtrl.push(SimpleStopResultsPage, { id: id });
  }

  home() {
    this.navCtrl.setRoot(SimpleStopHomePage);
  }
}
