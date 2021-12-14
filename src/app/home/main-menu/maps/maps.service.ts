import { Injectable } from '@angular/core';
import { Maps } from './maps.model';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private _maps: Maps [] = [
    new Maps(
      'Bay',
      51,
      -3,
      'AIzaSyA6mwflG5S0OM5mCCQ5ZPr55ChOJGgEaQc'
    )


  ];

  get maps() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._maps];
  }


  constructor() { }
}
