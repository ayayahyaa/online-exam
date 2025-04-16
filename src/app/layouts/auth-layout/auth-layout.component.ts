import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { AuthNavbarComponent } from '../auth-navbar/auth-navbar.component';
import { SocialIconsComponent } from "../../pages/social-icons/social-icons.component";

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, AuthNavbarComponent,],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
