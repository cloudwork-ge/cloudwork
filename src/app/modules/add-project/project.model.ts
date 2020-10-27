export class Project {
    public category:number = 0; // e.g ბუღალტერია, ელექტროობა და ა.შ
    public type:string = ""; // ერთჯერადი სამუშაო ან ყოველთვიური
    public projectName:string = "";
    public projectDescription:string = "";
    public projectCriteria:string = "";
    public startDate:Date = new Date();
    public endDate:Date = new Date();
    public monthsLength:number = 0;
    public budget:number = 0;
}
