export class InProgress {
  constructor(
      public _id: number,
      public title: string,
      public moduleCode: string,
      public createdDate: number,
      public dueDate: number,
      public body: string,
  ) {}
}

export class Completed {
  constructor(
      public _id: number,
      public title: string,
      public moduleCode: string,
      public createdDate: number,
      public dueDate: number,
      public body: string,
  ) {}
}

export class Overdue {
  constructor(
      public _id: number,
      public title: string,
      public moduleCode: string,
      public createdDate: number,
      public dueDate: number,
      public body: string,
  ) {}
}

export class Flagged {
  constructor(
      public _id: number,
      public title: string,
      public moduleCode: string,
      public createdDate: number,
      public dueDate: number,
      public body: string,
  ) {}
}
