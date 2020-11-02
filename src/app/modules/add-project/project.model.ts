export class Project {
    public ID:number = 0;
    public projectCategory:number = 0; // e.g ბუღალტერია, ელექტროობა და ა.შ
    // private _projectType: number = 0; // ერთჯერადი სამუშაო ან ყოველთვიური
    public projectType:number = 0;
    
    public projectName:string = "";
    public projectDescription:string = "";
    public projectCriteria:string = "";
    public startDate:Date = new Date();
    public endDate:Date = new Date();
    public monthsLength:number = 0;
    public budget:number = 0;
}
