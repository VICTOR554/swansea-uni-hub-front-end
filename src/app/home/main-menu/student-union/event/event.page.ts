import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  loadedEvent: Event[];
  selectSegment = 'current';

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loadedEvent = this.eventService.event;

  }

}
