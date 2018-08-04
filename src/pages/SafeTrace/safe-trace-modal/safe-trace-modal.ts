import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { SocketProvider } from "../../../providers/safe-trace-socket/safe-trace-socket";

/**
 * Generated class for the SafeTraceModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-safe-trace-modal",
  templateUrl: "safe-trace-modal.html"
})
export class SafeTraceModalPage {
  public specs = {
    type: "m",
    distance: 0,
    converted: 0
  };
  constructor(
    public viewController: ViewController,
    public navCtrl: NavController,
    public socket: SocketProvider
  ) {
    console.log("modal");

    this.socket.type.subscribe((data: any) => {
      console.log(data[0]);
      this.specs.type = data[0];
    });

    this.socket.distance.subscribe((data: any) => {
      console.log(data[0]);
      this.specs.distance = data[0];
    });
  }

  dismiss() {
    this.navCtrl.pop();
  }

  change() {
    if (this.specs.type === "f") {
      this.specs.converted = this.specs.distance * 0.305;
    } else {
      this.specs.converted = this.specs.distance * 1609.344;
    }

    console.log(this.specs);
    this.socket.setRadius(this.specs.converted);
    this.socket.setType(this.specs.type);
    this.socket.setdistance(this.specs.distance);
  }
}
