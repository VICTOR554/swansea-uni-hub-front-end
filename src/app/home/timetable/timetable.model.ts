export class Activity {
  constructor(
    public moduleCode: string,
    public lecturerName: string,
    public startDateTime: number,
    public endDateTime: number,
    public location: string,
    public type: string,
    public id?: string,
  ) { }
}

export class Week {
  constructor(
      public number: number,
      public dates: number[],

  ) { }
}

export class Module {
  constructor(
      public code: string,
      public name: string,
      public courseCode: number,
  ) { }
}

export class Locations {
  constructor(
      public name: string,
      public lat: number,
      public lng: number,
      public key: string,
  ) { }
}
