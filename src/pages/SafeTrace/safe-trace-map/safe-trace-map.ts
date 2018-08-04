import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  MenuController,
  AlertController,
  Platform,
  PopoverController,
  ModalController
} from "ionic-angular";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Marker,
  Circle
} from "@ionic-native/google-maps";
import { SocketProvider } from "../../../providers/safe-trace-socket/safe-trace-socket";
import { Geolocation } from "@ionic-native/geolocation";

/**
 * Generated class for the SafeTraceMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-safe-trace-map",
  templateUrl: "safe-trace-map.html"
})
export class SafeTraceMapPage {
  map: GoogleMap;

  public lat;
  public long;
  public userMarker: Marker;
  public childMarker: Marker;
  public radius = 1609.344;
  public center;
  public circle: Circle;
  public sent = false;
  constructor(
    private alertCtrl: AlertController,
    public platform: Platform,
    public geolocation: Geolocation,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public socket: SocketProvider,
    public modalCtrl: ModalController
  ) {
    this.menuCtrl.enable(true, "SafeTraceMenu");
    console.log("hello");
  }

  navButton() {
    this.navCtrl.push(SafeTraceMapPage);
  }

  doClick() {
    this.menuCtrl.open();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      console.log("ready");
      this.loadMap();
    });
  }

  updateMarker() {
    let lt = this.childMarker.getPosition();
    lt.lat += 0.00155;
    lt.lng += 0;
    if (lt.lat > this.lat + 0.018) {
      console.log("stopped");
    } else {
      this.childMarker.setPosition({ lat: lt.lat, lng: lt.lng });
    }

    const flag = this.circle
      .getBounds()
      .contains(this.childMarker.getPosition());
    console.log(flag);
    if (flag === false && this.sent === false) {
      console.log("sending");
      this.sent = true;
      this.socket
        .sendAlert()
        .then(data => {
          console.log(data);
        })
        .catch(data => {
          console.log(data);
        });
    }
  }

  loadMap() {
    const options = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(options).then(resp => {
      this.lat = +resp.coords.latitude;
      this.long = +resp.coords.longitude;
      this.center = { lat: this.lat, lng: this.long };
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: this.lat,
            lng: this.long
          },
          zoom: 13,
          tilt: 30
        }
      };

      this.map = GoogleMaps.create("map_canvas", mapOptions);
      const currentLocation: any = {
        position: { lat: this.lat, lng: this.long }
      };

      this.userMarker = this.map.addMarkerSync(currentLocation);

      const childMarkerPos = {
        position: { lat: this.lat, lng: this.long - 0.007 },
        icon: {
          url: "assets/kid.png",
          size: {
            width: 28,
            height: 46
          }
        }
      };

      this.childMarker = this.map.addMarkerSync(childMarkerPos);

      this.circle = this.map.addCircleSync({
        center: this.center,
        radius: this.radius,
        strokeColor: "#AA00FF",
        strokeWidth: 5,
        fillColor: "#00880055"
      });

      this.socket.radius.subscribe((data: any) => {
        console.log(data[0]);
        this.circle.setRadius(data[0]);
      });
    });
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Connect To Bracelet",
      inputs: [
        {
          name: "Pin",
          placeholder: "Bracelet Pin #",
          type: "password"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Connect",
          handler: data => {
            console.log("you dung did it you goof");
          }
        }
      ]
    });
    alert.present();
  }

  grabData() {
    this.socket.initSocket();
    this.socket.onEvent("update").subscribe(data => {
      this.updateMarker();
    });
  }

  start() {
    // this.grabData();

    setInterval(() => {
      this.updateMarker();
    }, 800);
  }
}
