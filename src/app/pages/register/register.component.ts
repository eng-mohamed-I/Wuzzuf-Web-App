import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  passwordVisibility = 'password';

  constructor() {}

  changePasswordVisibility() {
    this.passwordVisibility =
      this.passwordVisibility === 'password' ? 'text' : 'password';
  }
}
