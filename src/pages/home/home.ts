import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import { SimpleStopHomePage } from "../SimpleStop/simple-stop-home/simple-stop-home";
import { StandOutActorProfilePage } from "../StandOut/stand-out-actor-profile/stand-out-actor-profile";

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
    }
  ];

  constructor(public navCtrl: NavController, public menu: MenuController) {
    console.log(this.projects);
    // this.menu.enable(false, 'myMenu');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

  // hiddenBack(){
  //   this.counter ++;
  //   console.log('pressed ' + this.counter);
  //   if (this.counter >= 3){
  //     this.navCtrl.setRoot(HomePage);
  //   }
  // }
}
