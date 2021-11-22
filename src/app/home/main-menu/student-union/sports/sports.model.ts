export class Sports {
  constructor(
    public id: number,
    public img: string,
    public title: string,
    public category: string,
    public description: string,
    public trainingTime: TrainingTime[],
    public events: string[],
    public contact: Contacts,
    public status: string,
    ) {}
}

export class TrainingTime {
  constructor(
    public time: string,
    public location: string,
    ) {}
}



export class Contacts {
  constructor(
    public email: string,
    public linkedin: string,
    public facebook: string,
    public instagram: string,
    ) {}
}
