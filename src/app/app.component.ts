import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_Keycloak_depart';

  public profile?: KeycloakProfile;

  constructor(public keycloakService: KeycloakService) {}

  async ngOnInit() {
    try {
      const res = this.keycloakService.isLoggedIn(); // Await the promise
      console.log('res', res);

      if (res) {
        this.profile = await this.keycloakService.loadUserProfile(); // Safely load the profile
      }
    } catch (error) {
      console.error('An error occurred during initialization:', error);
    }
  }

  onLogout() {
    this.keycloakService.logout(window.location.origin);
  }

  async onLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin,
    });
  }
}
