import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  settingFullScreen: boolean = false;

  showHideSettingFullScreen() {
    this.settingFullScreen = this.settingFullScreen === false ? true : false;
  }
}
