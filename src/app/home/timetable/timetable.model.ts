export class Activity {
  constructor(
    public moduleCode: string,
    public lecturerName: string,
    public startDateTime: string,
    public endDateTime: string,
    public location: string,
    public type: string,
    public id?: string,
  ) { }
}
