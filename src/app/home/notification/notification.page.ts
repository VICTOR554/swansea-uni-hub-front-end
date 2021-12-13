import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notification } from './notification.model';
import { NotificationService } from './notification.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  noNotification;
  loadedCurrentNotification: Notification[];
  loadedPastNotification: Notification[];
  private notificationSub: Subscription;


  selectSegment = 'current';

  constructor(private notificationService: NotificationService, private loadingCtrl: LoadingController) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.receiveCurrentNotification();
    this.receivePastNotification();
  }

  receiveCurrentNotification() {
    this.loadingCtrl.create({ message: 'Loading Lecture...' })
      .then(loadingEl => {
        loadingEl.present();
        this.notificationSub = this.notificationService.getCurrentNotifications().subscribe((currentNotification: any) => {
          this.loadedCurrentNotification = currentNotification.data;
          console.log('Notification', this.loadedCurrentNotification);
          if (currentNotification.length === 0) {
            this.noNotification = true;
          } else {
            this.noNotification = false;
          }
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 500);
      });
  }
  receivePastNotification() {
    this.loadingCtrl.create({ message: 'Loading Lecture...' })
      .then(loadingEl => {
        loadingEl.present();
        this.notificationSub = this.notificationService.getPastNotifications().subscribe((pastNotification: any) => {
          this.loadedPastNotification = pastNotification.data;
          console.log('Notification', this.loadedPastNotification);
          if (pastNotification.length === 0) {
            this.noNotification = true;
          } else {
            this.noNotification = false;
          }
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 500);
      });
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.notificationSub) {
      this.notificationSub.unsubscribe();
    }
  }

}
