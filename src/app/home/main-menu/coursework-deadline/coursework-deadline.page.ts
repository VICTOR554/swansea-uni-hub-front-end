import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CourseworkDeadline } from './coursework-deadline.model';
import { CourseworkDeadlineService } from './coursework-deadline.service';

@Component({
  selector: 'app-coursework-deadline',
  templateUrl: './coursework-deadline.page.html',
  styleUrls: ['./coursework-deadline.page.scss'],
})
export class CourseworkDeadlinePage implements OnInit, OnDestroy {
  selectSegment = 'current';
  noNotification;
  loadedCurrentCoursework: CourseworkDeadline[];
  loadedPastCoursework: CourseworkDeadline[];
  private courseworksub: Subscription;

  constructor(private courseworkDeadlineService: CourseworkDeadlineService, private loadingCtrl: LoadingController ) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }
  ionViewWillEnter() {
    this.receiveCurrentNotification();
    this.receivePastNotification();
  }

  receiveCurrentNotification() {
    this.loadingCtrl.create({ message: 'Loading Lecture...' })
      .then(loadingEl => {
        loadingEl.present();
        this.courseworksub = this.courseworkDeadlineService.getCurrentCoursework().subscribe((currentNotification: any) => {
          this.loadedCurrentCoursework = currentNotification.data;
          console.log('Notification', this.loadedCurrentCoursework);
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
        this.courseworksub = this.courseworkDeadlineService.getPastCoursework().subscribe((pastNotification: any) => {
          this.loadedPastCoursework = pastNotification.data;
          console.log('Notification', this.loadedPastCoursework);
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
    if (this.courseworksub) {
      this.courseworksub.unsubscribe();
    }
  }


}
