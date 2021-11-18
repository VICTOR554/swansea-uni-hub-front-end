export class Booking {
  constructor(
    public id: number,
    public topic: string,
    public status: string,
    public type: string,
    public location: string,
    public dueDate: string,

    ) {}
}
