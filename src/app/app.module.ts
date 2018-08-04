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

//Tunnels
import { DeviceMotion } from "@ionic-native/device-motion";
import { ScreenOrientation } from "../../node_modules/@ionic-native/screen-orientation";
import { TunnelsHomePage } from "../pages/Tunnels/tunnels-home/tunnels-home";
import { TunnelsGameDonePage } from "../pages/Tunnels/tunnels-game-done/tunnels-game-done";
import { TunnelsGamePage } from "../pages/Tunnels/tunnels-game/tunnels-game";

//Quick Munch
import { LaunchNavigator } from "@ionic-native/launch-navigator";
import { GoogleMaps } from "@ionic-native/google-maps";
import { QuickMunchHomePage } from "../pages/QuickMunch/quick-munch-home/quick-munch-home";
import { QuickMunchModelPage } from "../pages/QuickMunch/quick-munch-model/quick-munch-model";
import { QuickMunchOrderPage } from "../pages/QuickMunch/quick-munch-order/quick-munch-order";
import { QuickMunchRatingsPage } from "../pages/QuickMunch/quick-munch-ratings/quick-munch-ratings";
import { QuickMunchVendorPage } from "../pages/QuickMunch/quick-munch-vendor/quick-munch-vendor";

//SafeTrace
import { HTTP } from "@ionic-native/http";
import { SocketProvider } from "../providers/safe-trace-socket/safe-trace-socket";
import { SafeTraceMapPage } from "../pages/SafeTrace/safe-trace-map/safe-trace-map";
import { SafeTracePopoverPage } from "../pages/SafeTrace/safe-trace-popover/safe-trace-popover";
import { SafeTraceModalPage } from "../pages/SafeTrace/safe-trace-modal/safe-trace-modal";
import { SafeTraceModal2Page } from "../pages/SafeTrace/safe-trace-modal2/safe-trace-modal2";

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
    VidConnectRatingPage,

    //Tunnels
    TunnelsHomePage,
    TunnelsGameDonePage,
    TunnelsGamePage,

    //Quick Munch
    QuickMunchHomePage,
    QuickMunchModelPage,
    QuickMunchOrderPage,
    QuickMunchRatingsPage,
    QuickMunchVendorPage,

    //SafeTrace
    SafeTraceMapPage,
    SafeTracePopoverPage,
    SafeTraceModalPage,
    SafeTraceModal2Page
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
    VidConnectRatingPage,

    //Tunnels
    TunnelsHomePage,
    TunnelsGameDonePage,
    TunnelsGamePage,

    //Quick Munch
    QuickMunchHomePage,
    QuickMunchModelPage,
    QuickMunchOrderPage,
    QuickMunchRatingsPage,
    QuickMunchVendorPage,

    //SafeTrace
    SafeTraceMapPage,
    SafeTracePopoverPage,
    SafeTraceModalPage,
    SafeTraceModal2Page
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
    InAppBrowser,

    //Tunnels
    ScreenOrientation,
    DeviceMotion,

    //Quick Munch
    GoogleMaps,
    LaunchNavigator,

    //SafeTrace
    SocketProvider,
    HTTP
  ]
})
export class AppModule {}
