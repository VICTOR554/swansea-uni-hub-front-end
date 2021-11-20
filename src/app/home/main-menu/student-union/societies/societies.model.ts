export class Societies {
  constructor(
    public id: number,
    public img: string,
    public title: string,
    public category: string,
    public moreInfo: MoreInfo,
    public contact: Contacts,
    public status: string,
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

export class Contacts {
  constructor(
    public email?: string,
    public linkedin?: string,
    public facebook?: string,
    public instagram?: string,
    ) {}
}
