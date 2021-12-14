import { Component, OnInit, OnDestroy } from '@angular/core';
import { Module, Notification } from './notification.model';
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
  loadedModules: Module[];



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

           // checks the module code and calls getmodule to get module name
           currentNotification.data.forEach(element => {
            if (element.moduleCode) {
              this.onGetModule(element.moduleCode);
            } else {
              this.onGetModule('No module');
            }
          });
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

          // checks the module code and calls getmodule to get module name
          pastNotification.data.forEach(element => {
            if (element.moduleCode) {
              this.onGetModule(element.moduleCode);
            } else {
              this.onGetModule('No module');
            }
          });

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

  // gets module name
  onGetModule(moduleCode) {
    if (moduleCode === 'No module') {
      this.loadedModules.push({
        name: '',
        code: '',
        courseCode: 0
      });
    } else {
      this.notificationSub = this.notificationService.getModule(moduleCode).subscribe((module: any) => {
        this.loadedModules.push(module.data);
        console.log('Module Code', moduleCode);
        console.log('Module', module.data);
        console.log('modules for the week', this.loadedModules);
      });
    }
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.notificationSub) {
      this.notificationSub.unsubscribe();
    }
  }

}
