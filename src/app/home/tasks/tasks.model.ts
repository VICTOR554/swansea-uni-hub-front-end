export class InProgress {
  constructor(
    public title: string,
    public moduleCode: string,
    public createdDateTime: string,
    public dueDateTime: string,
    public description: string,
    public flagged: string,
    public completed: string,
    public _id: number,
  ) { }
}

export class Completed {
  constructor(
    public title: string,
    public moduleCode: string,
    public createdDateTime: string,
    public dueDateTime: string,
    public description: string,
    public flagged: string,
    public completed: string,
    public _id: number,
  ) { }
}

export class Overdue {
  constructor(
    public title: string,
    public moduleCode: string,
    public createdDateTime: string,
    public dueDateTime: string,
    public description: string,
    public flagged: string,
    public completed: string,
    public _id: number,
  ) { }
}

export class Flagged {
  constructor(
    public title: string,
    public moduleCode: string,
    public createdDateTime: string,
    public dueDateTime: string,
    public description: string,
    public flagged: string,
    public completed: string,
    public _id: number,
  ) { }
}
