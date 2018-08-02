import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EducoDatabaseProvider } from "../../../providers/educo-database/educo-database";

@IonicPage()
@Component({
  selector: "page-educo-profile",
  templateUrl: "educo-profile.html"
})
export class EducoProfilePage {
  todo = {};
  user;
  editOn = false;

  constructor(public database: EducoDatabaseProvider) {
    this.user = this.database.getUser();
  }
  editButton() {
    this.editOn = true;
  }

  confirmButton() {
    this.database.editUser(
      this.user.name,
      this.user.school,
      this.user.grade,
      this.user.contact
    );
    this.editOn = false;
  }
}
