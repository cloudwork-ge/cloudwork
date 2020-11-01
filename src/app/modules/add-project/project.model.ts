export class Project {
    public projectCategory:number = 0; // e.g ბუღალტერია, ელექტროობა და ა.შ
    private _projectType: number = 0; // ერთჯერადი სამუშაო ან ყოველთვიური
    public get projectType(): number {
        return this._projectType;
    }
    public set projectType(value: number) {
        this._projectType = Number(value);
    }
    public projectName:string = "";
    public projectDescription:string = "";
    public projectCriteria:string = "";
    public startDate:Date = new Date();
    public endDate:Date = new Date();
    public monthsLength:number = 0;
    public budget:number = 0;
}
