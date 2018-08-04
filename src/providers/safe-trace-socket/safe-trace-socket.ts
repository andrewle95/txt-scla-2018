import { HTTP } from "@ionic-native/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as socketIo from "socket.io-client";
import { BehaviorSubject } from "rxjs";

const SERVER_URL = "https://4af6b693.ngrok.io";
/*
  Generated class for the SocketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocketProvider {
  private socket;
  public myData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    1609.344
  ]);
  public radius = this.myData.asObservable();

  public myData1: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([1]);
  public distance = this.myData1.asObservable();

  public myData2: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(["m"]);
  public type = this.myData2.asObservable();

  public num = "2133009188";

  constructor(public http: HTTP) {}

  public initSocket(): void {
    console.log("connect");
    this.socket = socketIo(SERVER_URL);
    this.socket.on("connect_error", function() {
      console.log("Connection Failed");
    });
  }

  public send(message): void {
    this.socket.emit("message", message);
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on("message", data => observer.next(data));
    });
  }

  public onEvent(event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, data => observer.next(data));
    });
  }

  public radiusUpdate() {
    return new Observable<Event>(observer => {
      this.socket.on("update", data => observer.next(data));
    });
  }

  public setRadius(num) {
    this.myData.next([num]);
  }

  public setType(num) {
    console.log(num);
    this.myData2.next([num]);
  }

  public setdistance(num) {
    this.myData1.next([num]);
  }

  grabVoterData() {
    return this.http.get(SERVER_URL + "/grabInit", {}, {});
  }

  sendAlert() {
    const AlERT_URL = "https://demo-day-voting.herokuapp.com";
    return this.http.post(
      AlERT_URL + "/demo-day-voting/sendAlert",
      { num: this.num },
      {}
    );
  }

  saveNum(num) {
    this.num = num;
  }
}
