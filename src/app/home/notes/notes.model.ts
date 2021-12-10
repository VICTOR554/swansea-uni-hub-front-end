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

// export class Note {
//   constructor(
//       public title: string,
//       public moduleCode: string,
//       public createdDateTime: number,
//       public description: string,
//       public _id?: string,
//   ) { }
// }

// export class Module {
//   constructor(
//       public code: string,
//       public name: string,
//       public courseCode: number,
//   ) { }
// }
