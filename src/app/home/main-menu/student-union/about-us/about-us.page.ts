import { Component, OnInit } from '@angular/core';
import { AboutUs } from './about-us.model';
import { AboutUsService } from './about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  loadedAboutUs: AboutUs[];


  constructor(private aboutUsService: AboutUsService) { }

  ngOnInit() {
    this.loadedAboutUs = this.aboutUsService.aboutUs;
  }

}
