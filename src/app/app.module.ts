import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

//Simple Stop
import { SimpleStopHomePage } from "../pages/SimpleStop/simple-stop-home/simple-stop-home";
import { SimpleStopPossibleProblemsPage } from "../pages/SimpleStop/simple-stop-possible-problems/simple-stop-possible-problems";
import { SimpleStopResultsPage } from "../pages/SimpleStop/simple-stop-results/simple-stop-results";

//StandOut
import { SMS } from "@ionic-native/sms";
import { StandOutActorProfilePage } from "../pages/StandOut/stand-out-actor-profile/stand-out-actor-profile";
import { StandOutAgentPage } from "../pages/StandOut/stand-out-agent/stand-out-agent";
import { StandOutView1Page } from "../pages/StandOut/stand-out-view1/stand-out-view1";
import { StandOutView2Page } from "../pages/StandOut/stand-out-view2/stand-out-view2";

//Educo
import { EducoDatabaseProvider } from "../providers/educo-database/educo-database";
import { EducoPeriodPage } from "../pages/Educo/educo-period/educo-period";
import { EducoProfilePage } from "../pages/Educo/educo-profile/educo-profile";
import { EducoPeriodNewPage } from "../pages/Educo/educo-period-new/educo-period-new";

//NorPro
import { Geolocation } from "@ionic-native/geolocation";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { NorProMainPage } from "../pages/NorPro/nor-pro-main/nor-pro-main";
import { NorProAboutPage } from "../pages/NorPro/nor-pro-about/nor-pro-about";
import { NorProContactPage } from "../pages/NorPro/nor-pro-contact/nor-pro-contact";

//VidConnect
// duplicate import { InAppBrowser } from "@ionic-native/in-app-browser";
import { VidConnectHomePage } from "../pages/VidConnect/vid-connect-home/vid-connect-home";
import { VidConnectProfilePage } from "../pages/VidConnect/vid-connect-profile/vid-connect-profile";
import { VidConnectRatingPage } from "../pages/VidConnect/vid-connect-rating/vid-connect-rating";

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    //Simple Stop
    SimpleStopHomePage,
    SimpleStopPossibleProblemsPage,
    SimpleStopResultsPage,

    //Stand Out
    StandOutActorProfilePage,
    StandOutAgentPage,
    StandOutView1Page,
    StandOutView2Page,

    // //Educo
    EducoPeriodNewPage,
    EducoPeriodPage,
    EducoProfilePage,

    //NorPro
    NorProMainPage,
    NorProAboutPage,
    NorProContactPage,

    //VidConnect
    VidConnectHomePage,
    VidConnectProfilePage,
    VidConnectRatingPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    //Simple Stop
    SimpleStopHomePage,
    SimpleStopPossibleProblemsPage,
    SimpleStopResultsPage,

    //Stand Out
    StandOutActorProfilePage,
    StandOutAgentPage,
    StandOutView1Page,
    StandOutView2Page,

    // //Educo
    EducoPeriodNewPage,
    EducoPeriodPage,
    EducoProfilePage,

    //NorPro
    NorProMainPage,
    NorProAboutPage,
    NorProContactPage,

    //VidConnect
    VidConnectHomePage,
    VidConnectProfilePage,
    VidConnectRatingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

    //Standout
    SMS,

    // Educo
    EducoDatabaseProvider,

    //NorPro
    Geolocation,
    InAppBrowser
  ]
})
export class AppModule {}
