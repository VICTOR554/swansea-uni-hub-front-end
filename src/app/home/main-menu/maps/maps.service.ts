import { Injectable } from '@angular/core';
import { Maps } from './maps.model';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private _maps: Maps [] = [
    // new Maps(
    //   'Bay',
    //   51,
    //   -3,
    //   ''

    // )


  ];


  constructor() { }
}
