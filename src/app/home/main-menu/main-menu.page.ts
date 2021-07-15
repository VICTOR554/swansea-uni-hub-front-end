import { Component, OnInit } from '@angular/core';
import { MainMenuService } from './main-menu.service';
import { Menu } from './main-menu.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {
  loadedMenu: Menu[];
  newMenu: Menu[];

  constructor(private mainMenuService: MainMenuService) { }

  ngOnInit() {
    this.loadedMenu = this.mainMenuService.menu.sort((a, b) => a.id-b.id);

  }

}
