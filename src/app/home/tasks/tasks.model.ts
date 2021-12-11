export class Task {
  constructor(
    public title: string,
    public moduleCode: string,
    public createdDateTime: number,
    public dueDateTime: number,
    public description: string,
    public flagged: boolean,
    public completed: boolean,
    public id?: string,
  ) { }
}

export class Module {
  constructor(
    public code: string,
      public name: string,
      public courseCode: number,
  ) { }
}
