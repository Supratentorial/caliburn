import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import {DashboardModule} from './dashboard/dashboard.module';
import {SettingsModule} from './settings/settings.module';
import {AppointmentsModule} from './appointments/appointments.module';
import {SharedModule} from './shared/shared.module';
import {PatientModule} from './patients/patient.module';

import {PatientService} from './shared/patient.service';
import {PatientManagerService} from "./patients/patient-manager.service";
import {AppointmentsService} from "./appointments/appointments.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, routing, DashboardModule, SettingsModule, AppointmentsModule, SharedModule, PatientModule, NgbModule.forRoot()],
  bootstrap: [AppComponent],
  providers: [PatientManagerService, PatientService, AppointmentsService]
})
export class AppModule {
}
