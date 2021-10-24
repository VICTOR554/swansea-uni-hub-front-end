export class CourseworkDeadline {
  constructor(
    public moduleCode: number,
    public title: string,
    public lecturerName: string,
    public dueDate: string,
    public status: string,
    public percentage: number,
    ) {}
}
