export class CourseworkDeadline {
  constructor(
    public moduleName: string,
    public title: string,
    public lecturerName: string,
    public dueDate: string,
    public status: string,
    public percentage: number,
    ) {}
}
