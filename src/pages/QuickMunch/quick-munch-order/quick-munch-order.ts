import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SMS } from "@ionic-native/sms";

/**
 * Generated class for the QuickMunchOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-quick-munch-order",
  templateUrl: "quick-munch-order.html"
})
export class QuickMunchOrderPage {
  public stores = [
    {
      position: { lat: 34.022284, lng: -118.291808 },
      name: "Gyro's Food Cart",
      phone: "121330009188",
      address: "1117 w 99th St",
      id: "taco-bell",
      destination: [34.022284, -118.291808]
    },
    {
      position: { lat: 34.033136, lng: -118.249739 },
      name: "State Bell",
      phone: "121330009188",
      address: "1117 w 99th St",
      id: "state-bell",
      destination: [34.033136, -118.249739]
    }
  ];
  public store;
  public items = [
    {
      name: "Taco",
      num: 0,
      price: "$1.50",
      priceNum: 1.5,
      desc:
        "Crisp-fried corn tortillas with seasoned ground beef, onion, and cilantro.",
      img: "assets/quick-munch/imgs/tacos.png",
      rating1: "fa fa-star checked",
      rating2: "fa fa-star checked",
      rating3: "fa fa-star checked",
      rating4: "fa fa-star checked",
      rating5: "fa fa-star"
    },
    {
      name: "Burger",
      num: 0,
      price: "$1.50",
      priceNum: 1.5,
      desc:
        "This burger is very pleasing to the eyes because it contains a rich sesame bun, juicy meat, melted cheese, and a sweet onion.",
      img: "assets/quick-munch/imgs/burger.png",
      rating1: "fa fa-star checked",
      rating2: "fa fa-star checked",
      rating3: "fa fa-star checked",
      rating4: "fa fa-star checked",
      rating5: "fa fa-star checked"
    },
    {
      name: "Hot Dog",
      num: 0,
      price: "$1.50",
      priceNum: 1.5,
      desc:
        "Crisp-fried corn tortillas with seasoned ground beef, onion, and cilantro.",
      img: "assets/quick-munch/imgs/hotdog.png",
      rating1: "fa fa-star checked",
      rating2: "fa fa-star checked",
      rating3: "fa fa-star checked",
      rating4: "fa fa-star checked",
      rating5: "fa fa-star"
    },
    {
      name: "Corn",
      num: 0,
      price: "$1.50",
      priceNum: 1.5,
      desc:
        "This corn is a classic in Mexico because it contains all these delicious ingredients, such as",
      img: "assets/quick-munch/imgs/corn.png",
      rating1: "fa fa-star checked",
      rating2: "fa fa-star checked",
      rating3: "fa fa-star checked",
      rating4: "fa fa-star",
      rating5: "fa fa-star"
    }
  ];
  public price = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sms: SMS
  ) {
    this.store = this.stores.filter(data => {
      console.log(data);
      if (data.id === this.navParams.get("id")) {
        return data;
      }
    });
    this.store = this.store[0];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderPage");
  }

  add(self) {
    console.log(self);
    self.num += 1;
    this.updatePrice();
  }

  subtract(self) {
    if (self.num > 0) {
      self.num -= 1;
    }
    this.updatePrice();
  }

  updatePrice() {
    this.price = 0;
    this.items.filter(data => {
      this.price += data.priceNum * data.num;
    });
  }

  sendSMS() {
    let msg = "Order request for " + this.store.name + "\n \n";
    this.items.filter(data => {
      if (data.num > 0) {
        msg += "" + data.name + " " + data.num + "\n";
      }
    });

    this.sms.send("4243092410", msg, { replaceLineBreaks: true });
  }
}
