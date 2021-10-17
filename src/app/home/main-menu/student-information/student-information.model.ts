export class StudentInformation {
  open: boolean;
  constructor(
    public title: string,
    public personalInformation: string,
    public courseDetails: string,
    public moduleDetails: string,
    public financeDetails: string,

    ) {}
}

export class PersonalInformation {
  constructor(
    public id: number,
    public name: string,
    public dob: number,
    public gender: string,
    public nationality: string,
    public email: string,
    public homeAddress: string,
    public phoneNumber: number,

    ) {}
}

export class CourseDetails {
  constructor(
    public code: number,
    public houseCampus: string,
    public college: string,
    public department: string,
    public type: string,
    public duration: string,
    public awardingBody: string,
    ) {}
}

export class ModuleDetails {
  constructor(
    public code: number,
    public name: string,
    public department: number,
    public level: string,
    public duration: string,
    ) {}
}

export class FinanceDetails {
  constructor(
    public tuitionBlalance: number,
    public accomodationBalance: string,
    ) {}
}
