/* eslint-disable id-blacklist */
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

// export class Student {
//   constructor(
//       public name: string,
//       public gender: string,
//       public dateOfBirth: number,
//       public nationality: string,
//       public telephone: string,
//       public email: string,
//       public address: string,
//       public homeCampus: string,
//       public department: string,
//       public degree: string,
//       public status: string,
//       public enrollment: boolean,
//       public courseDuration: string,
//       public endDateTime: number,
//       public courseCode: string,
//       public moduleCode: string,
//       public mainMenu: number,
//       public password: string,
//       public number: number,
//   ) { }
// }

