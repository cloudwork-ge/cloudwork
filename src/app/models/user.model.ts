export class LoginCredentials {
 public email:string;
 public password:string;
 constructor() {

 }
}
export class Registration {
  public email:string;
  public password:string;
  public confirmPassword:string;
  public fullName:string;
  public phone:string = "";
  public tin:string;
  public userType:UserTypes;
  public samformaType:number;
}
export enum UserTypes {
  Freelancer,
  Organization
}
export class Profile {
  public tin:string;
}
export class Passwords {
  public oldPassword:string;
  public newPassword:string;
  public confirmNewPassword:string;
}