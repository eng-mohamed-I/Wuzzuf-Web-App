import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgClass, BrowseJobsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  settingFullScreen: boolean = false;
  browserJobsSetting: boolean = false;

  showHideSettingFullScreen() {
    this.settingFullScreen = this.settingFullScreen === false ? true : false;
    this.browserJobsSetting = false;
  }
  browserJobsSettingVisibilty() {
    this.browserJobsSetting = this.browserJobsSetting === false ? true : false;
    this.settingFullScreen = false;
  }
}
