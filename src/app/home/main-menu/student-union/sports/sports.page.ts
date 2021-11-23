import { Component, OnInit } from '@angular/core';
import { Sports } from './sports.model';
import { SportsService } from './sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  loadedSports: Sports[];
  selectSegment = 'all';



  constructor(private sportsService: SportsService) { }

  ngOnInit() {
    this.loadedSports = this.sportsService.sports;

  }

}
