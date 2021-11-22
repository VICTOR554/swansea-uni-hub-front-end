export class AboutUs {
  constructor(
    public title: string,
    public description: string,
    public contact: Contact,
    public team: Team[],
    public location: Location[],
    ) {}
}

export class Contact {
  constructor(
    public contact: string,
    public contactDescription: string,
    public mediaContact: string,
    public mediaContactDescription: string,
    public salesContact: string,
    public salesContactDescription: string,
    ) {}
}

export class Team {
  constructor(
    public teamName: string,
    public personelName: string,
    public position: string,
    ) {}
}
export class Location {
  constructor(
    public name: string,
    public address: string,
    ) {}
}
