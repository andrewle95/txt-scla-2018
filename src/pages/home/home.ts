import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import { SimpleStopHomePage } from "../SimpleStop/simple-stop-home/simple-stop-home";
import { StandOutActorProfilePage } from "../StandOut/stand-out-actor-profile/stand-out-actor-profile";
import { EducoPeriodPage } from "../Educo/educo-period/educo-period";
import { NorProMainPage } from "../NorPro/nor-pro-main/nor-pro-main";
import { VidConnectHomePage } from "../VidConnect/vid-connect-home/vid-connect-home";
import { TunnelsHomePage } from "../Tunnels/tunnels-home/tunnels-home";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { QuickMunchHomePage } from "../QuickMunch/quick-munch-home/quick-munch-home";
import { SafeTraceMapPage } from "../SafeTrace/safe-trace-map/safe-trace-map";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  projects = [
    {
      title: "Simple Stop",
      icon: "assets/simple-stop/imgs/finalLogo.png",
      description: "This app is good",
      component: SimpleStopHomePage
    },
    {
      title: "Stand Out",
      icon: "",
      description: "This app is good",
      component: StandOutActorProfilePage
    },
    {
      title: "Educo",
      icon: "",
      description: "This app is good",
      component: EducoPeriodPage
    },
    {
      title: "NorPro",
      icon: "",
      description: "This app is good",
      component: NorProMainPage
    },
    {
      title: "VidConnect",
      icon: "",
      description: "This app is good",
      component: VidConnectHomePage
    },
    {
      title: "Tunnels",
      icon: "",
      description: "This app is good",
      component: TunnelsHomePage
    },
    {
      title: "Quick Munch",
      icon: "",
      description: "This app is good",
      component: QuickMunchHomePage
    },
    {
      title: "Safe Trace",
      icon: "",
      description: "This app is good",
      component: SafeTraceMapPage
    }
  ];

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public screenOrientation: ScreenOrientation
  ) {
    console.log(this.projects);
    this.menu.enable(false, "educoMenu");
    this.menu.enable(false, "SafeTraceMenu");
    // this.screenOrientation.lock(
    //   this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    // );
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

  // hiddenCounter = 0;

  // hiddenHome() {
  //   this.hiddenCounter++;
  //   if (this.hiddenCounter >= 3) {
  //     this.navCtrl.setRoot(HomePage);
  //   }
  //   console.log("pressed " + this.hiddenCounter + " times");
  // }
}
