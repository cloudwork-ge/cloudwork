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
  public userType:UserTypes = UserTypes.Freelancer;
  public samformaType:string;
  public acceptTermsCondition:boolean =false;
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