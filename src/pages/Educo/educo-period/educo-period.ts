import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EducoDatabaseProvider } from "../../../providers/educo-database/educo-database";
import { HomePage } from "../../home/home";

@IonicPage()
@Component({
  selector: "page-educo-period",
  templateUrl: "educo-period.html"
})
export class EducoPeriodPage {
  texts = [];
  newText = "";
  itemCount = 0;
  info;
  name = "No Class Selected";
  user = { name: "loading" };
  hiddenCounter = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public database: EducoDatabaseProvider
  ) {
    this.info = this.navParams.get("info");
    if (this.info != undefined) {
      this.texts = this.info.comments;
      this.name = this.info.teacherName;
    } else {
      this.info = {
        class_id: 0,
        className: "Algebra",
        teacherPicture: "assets/imgs/teacher.png",
        teacherName: "Mr. Domingez",
        roomNumber: "Room 745",
        period: "Period 1",
        comments: [
          {
            likes: 0,
            text:
              "The atmosphere of Mr. Domingez’s class is off. It feels like im trapped."
          }
        ]
      };
      this.texts = this.info.comments;
      this.name = this.info.teacherName;
      this.user = this.database.getUser();
    }
  }

  hiddenHome() {
    this.hiddenCounter++;
    if (this.hiddenCounter >= 3) {
      this.navCtrl.setRoot(HomePage);
    }
    console.log("pressed " + this.hiddenCounter + " times");
  }

  ionViewDidEnter() {
    this.user = this.database.getUser();
  }

  addPost() {
    this.texts.push({
      text: this.newText,
      likes: 0
    });
    this.newText = "";
    this.itemCount = this.texts.length;
  }

  likePost(likedPost) {
    if (likedPost.likes == 0) {
      likedPost.likes += 1;
    }

    console.log(likedPost.likes);
    console.log("Hello World");
    // sort likedPosts
    this.texts = this.texts.sort((a, b) => {
      if (a.likes > b.likes) {
        return -1;
      }
      if (a.likes < b.likes) {
        return 1;
      }
      return 0;
    });
    console.log(this.texts);
  }
}
