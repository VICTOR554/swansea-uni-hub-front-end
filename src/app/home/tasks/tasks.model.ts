export class InProgress {
  constructor(
      public _id: number,
      public title: string,
      public moduleName: string,
      public createdDate: string,
      public dueDate: string,
      public body: string,
  ) {}
}

export class Completed {
  constructor(
      public _id: number,
      public title: string,
      public moduleName: string,
      public createdDate: string,
      public dueDate: string,
      public body: string,
  ) {}
}

export class Overdue {
  constructor(
      public _id: number,
      public title: string,
      public moduleName: string,
      public createdDate: string,
      public dueDate: string,
      public body: string,
  ) {}
}

export class Flagged {
  constructor(
      public _id: number,
      public title: string,
      public moduleName: string,
      public createdDate: string,
      public dueDate: string,
      public body: string,
  ) {}
}
