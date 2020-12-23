import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonService } from "src/app/common/common.service";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  constructor(private commonService: CommonService, private http: HttpClient) {}
  openChat(userID: number) {
    var opt = this.commonService.getHttpOptions({ userID: userID });
    return this.http.get(this.commonService.baseUrl + "Messages/OpenChat", opt);
  }
}
