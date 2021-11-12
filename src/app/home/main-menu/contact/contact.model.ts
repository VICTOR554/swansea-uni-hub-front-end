export class Contact {
  constructor(
    public generalEnquiries: GeneralEnquiries,
    public campusAddress: CampusAddress,
    public academicServices: AcademicService,


    ) {}
}

export class GeneralEnquiries {
  constructor(
    public description: string,
    public tel: string,
    public minicom: string,
    ) {}
}

export class CampusAddress {
  constructor(
    public name: string[],
    public address: string[],
    ) {}
}

export class AcademicService {
  constructor(
    public description: string,
    public tel: string,
    public email: string,
    public officeHour: string,
    public location: string,
    ) {}
}
