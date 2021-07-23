export class Activity {
  constructor(
    public id: number,
    public moduleName: string,
    public type: string,
    public startTime: string,
    public endTime: string,
    public lecturerName: string,
    public location: string,
  ) { }
}
