import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController,) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      return;
    }

    const studentId = form.value.studentId;
    const password = form.value.password;
    console.log('User Input: ' + studentId + ', ' + password);

    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl.create({keyboardClose: true, message: 'logging in.....' })
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/home/tabs/main-menu');
      }, 1500);
    } );
  }

}
