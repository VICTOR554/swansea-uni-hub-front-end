import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimetableService } from '../timetable.service';
import { Week, Activity, Module } from '../timetable.model';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit, OnDestroy {
  currentDay = 0;
  noActivity;
  loadedActivity: Activity[];
  loadedWeek: Week;
  loadedModules: Module[];
  private listSub: Subscription;
  selectedPath = '/home/tabs/timetable/list-view';
  counter = 0;


  constructor(private timetableService: TimetableService,  private loadingCtrl: LoadingController)
  {}

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.receiveCurrentWeek();
  }

  receiveCurrentWeek() {
    this.listSub = this.timetableService.getCurrentWeek().subscribe((week: any) => {
      this.loadedWeek = week;
      console.log('Week', this.loadedWeek);

      this.receiveActivity(week.dates[0]);
      this.currentDay = 1639440000;
      console.log('First day of the week', this.currentDay);
    });
  }

  receiveWeekByNumber(weekNumber) {
    this.listSub = this.timetableService.getWeekByNumber(weekNumber).subscribe((week: any) => {
      this.loadedWeek = week;
      console.log('specific Week', this.loadedWeek);

      this.receiveActivity(week.dates[0]);
      console.log('Recieve Activity in recieve week');
      this.currentDay = week.dates[0];
    });
  }

  receiveActivity(currentDay) {
    this.loadingCtrl.create({ message: 'Loading Lecture...' })
      .then(loadingEl => {
        loadingEl.present();
        this.listSub = this.timetableService.getAllActivity(currentDay).subscribe((activities: any) => {
          this.loadedActivity = activities;
          console.log('Current day', currentDay);
          console.log('Activity', activities);

          if (activities.length === 0) {
            this.noActivity = true;
          } else {
            this.noActivity = false;
          }
          console.log('NO', this.noActivity);

          this.loadedModules = [];
          // checks the module code and calls getmodule to get module name
          activities.forEach(element => {
            this.receiveModule(element.moduleCode);
          });
        });
        setTimeout(() => {
          loadingEl.dismiss();
        }, 500);
      });
  }

  // gets module name
  receiveModule(moduleCode) {
    this.listSub = this.timetableService.getModule(moduleCode).subscribe((module: any) => {
      this.loadedModules.push(module.data);
      console.log('Module Code', moduleCode);
      console.log('Module', module.data);
      console.log('modules for the actvities in a day', this.loadedModules);
    });
  }

  previousWeek(weekNumber) {
    this.receiveWeekByNumber(weekNumber - 1);
  }

  nextWeek(weekNumber) {
    this.receiveWeekByNumber(weekNumber + 1);
  }

  chosenDay(chosenDay) {
    this.receiveActivity(chosenDay);
    this.currentDay = chosenDay;
  }

  // used to clear subscription to avoid memory leaks
  ngOnDestroy() {
    if (this.listSub) {
      this.listSub.unsubscribe();
    }
  }
}
