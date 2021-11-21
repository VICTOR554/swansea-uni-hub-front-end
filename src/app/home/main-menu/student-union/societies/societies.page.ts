import { Component, OnInit } from '@angular/core';
import { Societies } from './societies.model';
import { SocietiesService } from './societies.service';

@Component({
  selector: 'app-societies',
  templateUrl: './societies.page.html',
  styleUrls: ['./societies.page.scss'],
})
export class SocietiesPage implements OnInit {
  loadedSocieties: Societies[];
  selectSegment = 'all';


  constructor(private societiesService: SocietiesService) { }

  ngOnInit() {
    this.loadedSocieties = this.societiesService.societies;

  }

}
