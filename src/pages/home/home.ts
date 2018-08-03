import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import { SimpleStopHomePage } from "../SimpleStop/simple-stop-home/simple-stop-home";
import { StandOutActorProfilePage } from "../StandOut/stand-out-actor-profile/stand-out-actor-profile";
import { EducoPeriodPage } from "../Educo/educo-period/educo-period";
import { NorProMainPage } from "../NorPro/nor-pro-main/nor-pro-main";

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
    }
  ];

  constructor(public navCtrl: NavController, public menu: MenuController) {
    console.log(this.projects);
    this.menu.enable(false, "educoMenu");
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
