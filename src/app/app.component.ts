import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { OnInit } from "@angular/core";

import { HomePage } from "../pages/home/home";
import { EducoDatabaseProvider } from "../providers/educo-database/educo-database";
import { EducoProfilePage } from "../pages/Educo/educo-profile/educo-profile";
import { EducoPeriodNewPage } from "../pages/Educo/educo-period-new/educo-period-new";
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
    public alertCtrl: AlertController
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
