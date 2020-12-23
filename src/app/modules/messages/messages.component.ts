import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/common/common.service";
import { ChatService } from "./chat.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.openChat(12).subscribe((x) => {
      console.log(x);
    });
  }
  openChat() {}
}
