import { Injectable } from "@angular/core";
import { EducoPeriodPage } from "../../pages/Educo/educo-period/educo-period";

/*
  Generated class for the EducoDatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EducoDatabaseProvider {
  user = {
    name: "Ricardo G.",
    school: "Verbum Dei",
    grade: "11th",
    contact: "RG3@gmail.com"
  };

  classes = [
    {
      class_id: 0,
      className: "Algebra",
      teacherPicture: "assets/educo/imgs/teacher.png",
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
    },
    {
      class_id: 1,
      className: "English",
      teacherName: "Mr. Rodriguez",
      teacherPicture: "assets/educo/imgs/teacher2.png",
      roomNumber: "Room 207",
      period: "Period 2",
      comments: [
        {
          likes: 0,
          text: "I'm bored in class"
        }
      ]
    },
    {
      class_id: 2,
      className: "Physics",
      teacherName: "Ms. Promunis",
      teacherPicture: "assets/educo/imgs/teacher3.png",
      roomNumber: "Room 302",
      period: "Period 3",
      comments: [
        {
          likes: 0,
          text: "Bro that Homework was easy I want a challenge"
        }
      ]
    },
    {
      class_id: 3,
      className: "Bio",
      teacherName: "Mr. Johnson",
      teacherPicture: "assets/educo/imgs/teacher4.png",
      roomNumber: "Room 506",
      period: "Period 4 ",
      comments: [
        {
          likes: 0,
          text: "Alright bet, this class is too easy"
        }
      ]
    }
  ];

  profiles = [
    {
      name: "Ricardo G.",
      school: "Verbum Dei",
      grade: "11th",
      contact: "323-394-6216"
    }
  ];

  constructor() {
    console.log("Hello DatabaseProvider Provider");
  }

  getClass(class_id) {
    for (let i = 0; i < this.classes.length; i++) {
      if (this.classes[i].class_id == class_id) {
        return this.classes[i];
      }
    }
  }

  getPages() {
    let output = [];
    for (let i = 0; i < this.classes.length; i++) {
      output.push({
        title: this.classes[i].teacherName,
        image: this.classes[i].teacherPicture,
        className: this.classes[i].className,
        room: this.classes[i].roomNumber,
        component: EducoPeriodPage,
        class_id: this.classes[i].class_id
      });
    }
    return output;
  }

  //For the Profile Data
  getUser() {
    console.log("im being called");
    return this.user;
  }

  editUser(name, school, grade, contact) {
    this.user.name = name;
    this.user.school = school;
    this.user.grade = grade;
    this.user.contact = contact;
  }
}
