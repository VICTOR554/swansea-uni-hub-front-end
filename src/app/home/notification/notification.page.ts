import { Component, OnInit } from '@angular/core';
import { Notification } from './notification.model';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  loadedNotification: Notification[];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadedNotification = this.notificationService.notification;

  }

}
