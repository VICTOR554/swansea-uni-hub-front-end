export class StudentInformation {
  constructor(
    public studentNumber: number,
    public name: string,
    public gender: string,
    public dateOfBirth: string,
    public nationality: string,
    public telephone: string,
    public email: string,
    public address: string,
    public homeCampus: string,
    public department: string,
    public courseId: number,
    public degree: string,
    public status: string,
    public enrollement: string,
    public duration: Duration,
    public specialism: string,
    public modules: Module,
    public finance: Finance,

    ) {}
}

export class Module {
  constructor(
    public name: string[],
    public code: number,
    public courseId: number,
    ) {}
}

export class Finance {
  constructor(
    public tuitionBalance: number,
    public accomodationBalance: number[],
    ) {}
}
export class Duration {
  constructor(
    public startTime: string,
    public endTime: string,
    ) {}
}
