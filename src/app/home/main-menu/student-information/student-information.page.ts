import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentInformationService } from './student-information.service';
import { Module, StudentInformation } from './student-information.model';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.page.html',
  styleUrls: ['./student-information.page.scss'],
})
export class StudentInformationPage implements OnInit {
  noStudent;
  loadedStudentInfo: StudentInformation[];
  loadedModules: Module[];
  // private studentInfoSub: Subscription;


  constructor(private studentInformationService: StudentInformationService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadedStudentInfo = this.studentInformationService.studentInformation;
  }



  // ionViewWillEnter() {
  //   this.receiveStudentInfo();
  // }
  // receiveStudentInfo() {
  //   this.loadingCtrl.create({ message: 'Loading Student Information...' })
  //     .then(loadingEl => {
  //       loadingEl.present();
  //       this.studentInfoSub = this.studentInformationService.getStudent().subscribe((studentInformation: any) => {
  //         this.loadedStudentInfo = studentInformation.data;
  //         console.log("student ",studentInformation.data);
  //         console.log("loaded student name",);


  //         this.loadedModules = [];

  //         if (studentInformation.data.length === 0) {
  //           this.noStudent = true;
  //         } else {
  //           this.noStudent = false;
  //         }
  //       });
  //       setTimeout(() => {
  //         loadingEl.dismiss();
  //       }, 1000);
  //     });
  // }

  // receiveModule(moduleCode) {
  //   if (moduleCode === 'no module') {
  //     this.loadedModules.push({
  //       name: '',
  //       code: '',
  //       courseCode: 0
  //     });
  //   } else {
  //     this.studentInfoSub = this.studentInformationService.getModule(moduleCode).subscribe((module: any) => {
  //       this.loadedModules.push(module.data);
  //       console.log('Module Code', moduleCode);
  //       console.log('Module', module);
  //       console.log('modules for the week', this.loadedModules);
  //     });
  //   }
  // }


  // // used to clear subscription to avoid memory leaks
  // ngOnDestroy() {
  //   if (this.studentInfoSub) {
  //     this.studentInfoSub.unsubscribe();
  //   }
  // }


}
