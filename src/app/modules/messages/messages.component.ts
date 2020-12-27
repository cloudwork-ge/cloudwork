import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Key } from "readline";
import { Authuser } from "src/app/common/authuser";
import { Calendar } from "src/app/common/calendar";
import { CommonService } from "src/app/common/common.service";
import { IChat, IMessage } from "./Chat";
import { ChatService } from "./chat.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    private calendar: Calendar,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((x) => {
      if (x["id"]) {
        this.openChatByUserID(x["id"]);
      }
    });
  }
  messages: IMessage[] = [];
  authUser = Authuser;
  recentChats: IChat[] = [];
  openedChat: IChat;
  typedText: string = "";
  showLoader: boolean = false;
  async ngOnInit() {
    await this.authUser.getUserData();
    // this.openChat(12);
    this.getRecentChats();
  }
  isMyMessage(message: IMessage): boolean {
    if (this.authUser.ID == message.fromUserID) return true;
    return false;
  }
  openChat(chat: IChat) {
    this.openedChat = chat;
    this.showLoader = true;
    this.chatService.openChat(chat.id).subscribe((x) => {
      this.showLoader = false;
      this.messages = x;
      this.scrollToBottom();
    });
  }
  openChatByUserID(id: number) {
    this.showLoader = true;
    this.chatService.createOrGetChat(id).subscribe((chat) => {
      this.showLoader = false;
      this.openChat(chat);
      this.getRecentChats();
    });
  }
  getRecentChats() {
    this.chatService.getRecentChats().subscribe(
      (x) => {
        console.log(x);
        this.recentChats = x;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  @ViewChild("messagesView") messagesView: ElementRef;
  sendMessage() {
    if (this.typedText.length == 0) return;
    var mesasgeText = this.typedText;
    this.typedText = "";

    this.chatService.sendMessage(mesasgeText, this.openedChat.id).subscribe();
    let message: IMessage = {
      ID: 0,
      fromUserID: this.authUser.ID,
      fromUserName: this.authUser.fullName,
      message: mesasgeText,
      createDate: new Date(),
    };
    this.messages.push(message);
    this.openedChat.lastMessage = mesasgeText;
    this.openedChat.lastMessageDate = this.calendar.toGeoDate(
      new Date().toDateString()
    );
    this.scrollToBottom();
  }
  scrollToBottom() {
    setTimeout(() => {
      var msgsView = this.messagesView.nativeElement as HTMLElement;
      msgsView.scrollBy(null, msgsView.scrollHeight);
    }, 1);
  }
}
