export class Notification {
  constructor(
    public moduleCode: number,
    public title: string,
    public lecturerName: string,
    public description: string,
    public status: string,
    public createdDateTime: number,
    ) {}
}
export class Module {
  constructor(
    public code: string,
      public name: string,
      public courseCode: number,
  ) { }
}
