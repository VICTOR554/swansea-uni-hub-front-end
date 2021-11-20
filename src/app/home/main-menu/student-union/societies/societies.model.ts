export class Societies {
  constructor(
    public id: number,
    public img: string,
    public title: string,
    public category: string,
    public moreInfo: MoreInfo,
    public contact: Contact,
    public status: string,
    public path: string,
    ) {}
}

export class MoreInfo {
  constructor(
    public title2: string,
    public description2: string,
    public title3: string,
    public description3: string,
    ) {}
}

export class Contact {
  constructor(
    public email: string,
    public linkedin: string,
    public facebook: string,
    public instagram: string,
    ) {}
}
