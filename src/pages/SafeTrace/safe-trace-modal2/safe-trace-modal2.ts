import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  ViewController,
  AlertController
} from "ionic-angular";
import { SocketProvider } from "../../../providers/safe-trace-socket/safe-trace-socket";

@IonicPage()
@Component({
  selector: "page-safe-trace-modal2",
  templateUrl: "safe-trace-modal2.html"
})
export class SafeTraceModal2Page {
  public specs = {
    type: "m",
    distance: 0,
    converted: 0
  };

  public num;
  constructor(
    public viewController: ViewController,
    public navCtrl: NavController,
    public socket: SocketProvider,
    public alertCtrl: AlertController
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

  ngOnInit() {
    this.num = this.socket.num;
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

  saveNum() {
    this.socket.saveNum(this.num);
    let alert = this.alertCtrl.create({
      title: "Saved",
      subTitle: "Phone Number Updated",
      buttons: [
        {
          text: "OK"
        }
      ]
    });
    alert.present();
  }
}
