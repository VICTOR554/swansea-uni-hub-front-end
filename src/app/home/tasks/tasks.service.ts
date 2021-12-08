import { Injectable } from '@angular/core';
import { InProgress, Completed, Flagged, Overdue} from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _inProgress: InProgress [] = [
    new InProgress(
      1,
      'HCI REVIEW',
      'HCI',
      '9:00 am',
      '10:00 am',
      'Human-Computer Interaction is a disciplin',
    ),
    new InProgress(
      2,
      'Exam',
      'Blockchain',
      '10:00 am',
      '11:00 am',
      'Study',
    ),
    new InProgress(
      3,
      'Dissertation',
      'Data visualisation',
      '1:00 pm',
      '4:00 pm',
      'Study',
    ),
  ];

  private _completed: Completed [] = [
    new Completed(
      1,
      'work',
      'HCI',
      '9:00 am',
      '10:00 am',
      'finally',
    ),
    new Completed(
      2,
      'fly',
      'HCI',
      '9:00 am',
      '10:00 am',
      'Just defy gravity',
    ),
    new Completed(
      3,
      'Go to space',
      'HCI',
      '9:00 am',
      '10:00 am',
      'fight astronaut',
    ),
  ];

  private _flagged: Flagged [] = [
    new Flagged(
      1,
      'Dissertation',
      'Final Year',
      '9:00 am',
      '10:00 am',
      'work on it',
    ),
    new Flagged(
      2,
      'Specification',
      'Final Year',
      '9:00 am',
      '10:00 am',
      'finiah it',
    ),
    new Flagged(
      3,
      'Safety',
      '',
      '9:00 am',
      '10:00 am',
      'your safety',
    ),
  ];

  private _overdue: Overdue [] = [
    new Overdue(
      1,
      'Covid',
      '',
      '9:00 am',
      '10:00 am',
      'shouldnt have shocked the world',
    ),
    new Overdue(
      2,
      'Lockdown',
      'HCI',
      '9:00 am',
      '10:00 am',
      'it has been going for too long',
    ),
    new Overdue(
      3,
      'Summer',
      'Blockchain',
      '9:00 am',
      '10:00 am',
      'Work',
    ),
  ];

  constructor() { }

  get getinProgress() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._inProgress];
  }

  get getCompleted() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._completed];
  }

  get getFlagged() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._flagged];
  }

  get getOverdue() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._overdue];
  }




}
