import { Component, ViewChild } from "@angular/core";
import {
  Nav,
  Platform,
  AlertController,
  MenuController,
  ModalController
} from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { OnInit } from "@angular/core";

import { HomePage } from "../pages/home/home";
import { EducoDatabaseProvider } from "../providers/educo-database/educo-database";
import { EducoProfilePage } from "../pages/Educo/educo-profile/educo-profile";
import { EducoPeriodNewPage } from "../pages/Educo/educo-period-new/educo-period-new";
import { SafeTraceModalPage } from "../pages/SafeTrace/safe-trace-modal/safe-trace-modal";
import { SafeTraceModal2Page } from "../pages/SafeTrace/safe-trace-modal2/safe-trace-modal2";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{ title: string; component: any }>;

  user;

  flag = false;
  rootPage: any = HomePage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public db: EducoDatabaseProvider,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = this.db.getPages();
    this.user = this.db.getUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { info: this.db.getClass(page.class_id) });
  }
  profilePage() {
    this.nav.push(EducoProfilePage);
  }
  addMenu() {
    if (this.flag === false) {
      let otherPages = [
        {
          class_id: 0,
          className: "Algebra",
          image: "assets/educo/imgs/addTeacher.png",
          title: "Mrs. Anderson",
          room: "Room 745",
          component: EducoPeriodNewPage
        }
      ];
      this.pages = this.pages.concat(otherPages);
      this.flag = true;
    } else {
      let alert = this.alertCtrl.create({
        title: "Execeded Free Class Additions",
        subTitle:
          "You can only add one class for free. Please upgrade for more class additions.",
        buttons: ["Ok"]
      });
      alert.present();
    }
  }

  //Safe Trace
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Set Distance",
      inputs: [
        {
          name: "Model #",
          placeholder: "Connection Name"
        },
        {
          name: "Pin",
          placeholder: "Bracelet #",
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

  presentModal() {
    let contactModal = this.modalCtrl.create(SafeTraceModalPage);
    contactModal.present();
    this.menuCtrl.close();
  }

  openSettings() {
    let contactModal = this.modalCtrl.create(SafeTraceModal2Page);
    contactModal.present();
    this.menuCtrl.close();
  }
}

export class appComponent implements OnInit {
  itemCount: number;
  btnText: string = "Send";
  textText: string = "Got Anything to say?";

  constructor() {}

  ngOnInit() {
    //this.itemCount = this.texts.length;
  }
}
