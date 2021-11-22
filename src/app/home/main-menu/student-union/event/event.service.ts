/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from './event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _event: Event[] = [
    new Event(
      0,
      'victor',
      'Christmas Event',
      'Uni Event',
      'current',
      'Non - music',
      'Imagine this.... you’re in the Refectory with your teammates, everyones dressed as well-known Heros and Villains, your sports captains and members are battling it out in a game of darts while you win points for your team by taking part in various challenges.... OH, then imagine there’s a 150” pair of balls hanging from the ceiling ',
      0,
      'Refectory, Fulton House, Singleton Camppus'
    ),
    new Event(
      1,
      'victor',
      'Movember',
      'Uni Event',
      'current',
      'Non - music',
      'Imagine this.... you’re in the Refectory with your teammates, everyones dressed as well-known Heros and Villains, your sports captains and members are battling it out in a game of darts while you win points for your team by taking part in various challenges.... OH, then imagine there’s a 150” pair of balls hanging from the ceiling ',
      10,
      'Refectory, Fulton House, Singleton Camppus'
    ),
    new Event(
      2,
      'victor',
      'winter',
      'Uni Event',
      'past',
      'Non - music',
      'Imagine this.... you’re in the Refectory with your teammates, everyones dressed as well-known Heros and Villains, your sports captains and members are battling it out in a game of darts while you win points for your team by taking part in various challenges.... OH, then imagine there’s a 150” pair of balls hanging from the ceiling ',
      20,
      'Bay Camppus'
    ),
    new Event(
      3,
      'victor',
      'october fest',
      'Uni Event',
      'past',
      'Non - music',
      'Imagine this.... you’re in the Refectory with your teammates, everyones dressed as well-known Heros and Villains, your sports captains and members are battling it out in a game of darts while you win points for your team by taking part in various challenges.... OH, then imagine there’s a 150” pair of balls hanging from the ceiling ',
      30,
      'Town square'
    ),
  ];

  get event() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._event];
  }


  constructor() { }
}
