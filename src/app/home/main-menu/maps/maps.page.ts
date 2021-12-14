import { Component, OnInit } from '@angular/core';
import { Maps } from './maps.model';
import { MapsService } from './maps.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  loadedMaps: Maps[];
  selectedLocationImage: string;


  constructor(private mapsService: MapsService) { }

  ngOnInit() {
    this.loadedMaps = this.mapsService.maps;

  }

   getMapImage(lat: number, lng: number, zoom: number, key:string) {

    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=1080x1920&maptype=roadmap
    &markers=color:red%7Clabel:Location%7C${lat},${lng}
    &key=${key}`;
  }

}
