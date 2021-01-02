import { Calendar } from "src/app/common/calendar";

export interface IChat {
  id: number;
  name: string;
  firstUserID: number;
  firstUserName: string;
  secondUserID: number;
  secondUserName: string;
  lastMessage: string;
  lastMessageDate: Date | string;
  lastMessageDateStr: string;
  createDate: Date;
  read: number;
}
export interface IMessage {
  id: number;
  fromUserID: number;
  fromUserName: string;
  toUserID?: number;
  toUserName?: string;
  message: string;
  createDate: Date;
  read?: number;
  readDate?: Date;
}
