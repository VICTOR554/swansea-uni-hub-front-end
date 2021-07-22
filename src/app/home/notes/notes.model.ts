export class Note {
  constructor(
      public id: number,
      public title: string,
      public moduleName: string,
      public moduleCode: string,
      public body: string,
      public time: string,
  ) { }
}
