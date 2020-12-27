import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonService } from "src/app/common/common.service";
import { IChat, IMessage } from "./Chat";
import { tap, map } from "rxjs/operators";
import { error } from "protractor";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  constructor(private commonService: CommonService, private http: HttpClient) {}
  options = this.commonService.getHttpOptions();
  baseUrl = this.commonService.baseUrl;
  loader = this.commonService.requestLoader;
  openChat(chatID: number) {
    return this.http
      .post<IMessage[]>(
        this.baseUrl + "Messages/OpenChat",
        {
          chatID: chatID,
        },
        this.options
      )
      .pipe(
        tap(
          (data) => console.log(data),
          (error) => this.commonService.handleErrors(error)
        )
      );
  }
  createOrGetChat(chatUserID: number) {
    return this.http
      .post<IChat>(
        this.baseUrl + "Messages/CreateOrGetChat",
        {
          chatID: 0,
          chatUserID: Number(chatUserID),
        },
        this.options
      )
      .pipe(
        tap(
          (data) => console.log(data),
          (error) => this.commonService.handleErrors(error)
        )
      );
  }
  getRecentChats() {
    return this.http
      .post<IChat[]>(this.baseUrl + "Messages/GetRecentChats", {}, this.options)
      .pipe(
        tap(
          (data) => console.log(data),
          (error) => this.commonService.handleErrors(error)
        )
      );
  }
  sendMessage(messageText: string, chatID: number) {
    return this.http.post(
      this.baseUrl + "Messages/SendMessage",
      { messageText: messageText, chatID: chatID },
      this.options
    );
  }
}
