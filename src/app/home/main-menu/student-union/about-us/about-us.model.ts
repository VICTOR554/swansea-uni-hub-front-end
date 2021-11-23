export class AboutUs {
  constructor(
    public description: string,
    public contact: Contact,
    public location: Location[],
    ) {}
}

export class Contact {
  constructor(
    public contact: string,
    public mediaContact: string,
    public salesContact: string,
    ) {}
}

export class Location {
  constructor(
    public name: string,
    public address: string,
    ) {}
}
