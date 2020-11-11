export class Bid {
    public projectID:number;
    public budget:number = 1;
    public deadlineDays:number = 0;
    public paymentCondition:string = "";
    public comment:string = "";
    public status:number = 0;    
    public acceptTermsCondition:boolean = false;
}
