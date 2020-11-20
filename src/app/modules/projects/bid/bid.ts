export class Bid {
    public ID:number = 0;
    public projectID:number;
    public budget:number = 1;
    public deadlineDays:number = 0;
    public paymentCondition:string = "";
    public comment:string = "";
    public status:number = 0;    
    public acceptTermsCondition:boolean = false;
    public userID:number = 0;
    public fullName:string = "";
}
