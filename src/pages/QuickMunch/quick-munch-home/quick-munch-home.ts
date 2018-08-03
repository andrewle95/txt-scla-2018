import { Component, NgZone } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the QuickMunchHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-quick-munch-home",
  templateUrl: "quick-munch-home.html"
})
export class QuickMunchHomePage {
  public infoWindowFlag = false;
  public currentMarker = {
    name: "",
    phone: "",
    address: "",
    id: "",
    destination: ""
  };
  map: GoogleMap;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public ngZone: NgZone,
    public launchNavigator: LaunchNavigator
  ) {
    let self = this;
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    const self = this;

    let POINTS = [
      {
        position: { lat: 34.022284, lng: -118.291808 },
        name: "Gyro's Food Cart",
        phone: "(424) 309-2410",
        address: "1117 w 99th St",
        id: "taco-bell",
        destination: [34.022284, -118.291808],
        icon: {
          url: "assets/cart.png",
          size: {
            width: 40,
            height: 40
          }
        }
      },
      {
        position: { lat: 34.033136, lng: -118.249739 },
        name: "State Bell",
        phone: "121330009188",
        address: "1117 w 99th St",
        id: "state-bell",
        destination: [34.033136, -118.249739],
        icon: {
          url: "assets/cart.png",
          size: {
            width: 40,
            height: 40
          }
        }
      }
    ];

    let mapOptions: GoogleMapOptions = {
      gestures: {
        zoom: true,
        title: false
      },
      camera: {
        target: {
          lat: 34.021488,
          lng: -118.286822
        },
        zoom: 15,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create("map_canvas", mapOptions);

    POINTS.forEach((data: any) => {
      console.log("adding markers");
      console.log(data);
      data.disableAutoPan = true;
      let marker: Marker = this.map.addMarkerSync(data);
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        console.log("hello");
        this.ngZone.run(() => {
          this.currentMarker = {
            name: data.name,
            phone: data.phone,
            address: data.address,
            id: data.id,
            destination: data.destination
          };
          this.infoWindowFlag = true;
        });
      });
    });
  }

  close() {
    this.infoWindowFlag = false;
  }

  navigate(dest) {
    let options: LaunchNavigatorOptions = {
      start: [34.021488, -118.286822],
      app: this.launchNavigator.APP.APPLE_MAPS
    };

    this.launchNavigator
      .navigate(dest, options)
      .then(
        success => console.log("Launched navigator"),
        error => console.log("Error launching navigator", error)
      );
  }

  order(id) {
    console.log(id);
    this.navCtrl.push(OrderPage, { id: id });
  }
}
