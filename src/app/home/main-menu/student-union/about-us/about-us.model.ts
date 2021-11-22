export class AboutUs {
  constructor(
    public title: string,
    public description: string,
    public contact: Contact,
    public team: Team,

    ) {}
}

export class Contact {
  constructor(
    public contact: string,
    public mediaContact: string,
    public salesContact: string,
    public location: string,

    ) {}
}

export class Team {
  constructor(
    public teamName: string,
    public personelName: string,
    public position: string,
    ) {}
}
