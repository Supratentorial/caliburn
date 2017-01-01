/**
 * Created by blake on 28/11/2016.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PatientShellComponent} from './patient-shell.component';
import {PatientBannerComponent} from './patient-banner.component';
import {patientRouting} from './patient.routing';
import {PatientHomeComponent} from './patient-home.component';
import {OpenPatientsComponent} from './open-patients.component';
import {PatientSummaryComponent} from './patient-summary.component';
import {PatientDemographicsComponent} from './patient-demographics.component';
import {InlineSVGModule} from "ng-inline-svg";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [PatientShellComponent, PatientBannerComponent, PatientHomeComponent, OpenPatientsComponent, PatientSummaryComponent, PatientDemographicsComponent],
  exports: [PatientShellComponent, PatientBannerComponent],
  imports: [CommonModule, FormsModule, patientRouting, InlineSVGModule, NgbModule],
  providers: []
})

export class PatientModule {
}
