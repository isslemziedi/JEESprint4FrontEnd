import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { isPlatformBrowser } from '@angular/common';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LivresComponent } from './livres/livres.component';
function initializeKeycloak(keycloak: KeycloakService, platformId: Object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      return keycloak.init({
        config: {
          url: 'http://localhost:8090',
          realm: 'isslem_realm',
          clientId: 'livre-app'
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
        }
      });
    } else {
      return Promise.resolve();
    }
  };
}
@NgModule({
  declarations: [
    AppComponent,
    LivresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, PLATFORM_ID] // Added PLATFORM_ID here
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
