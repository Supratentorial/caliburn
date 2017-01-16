/**
 * Created by blake on 28/11/2016.
 */
import {Routes, RouterModule} from '@angular/router';
import {PatientShellComponent} from './patient-shell.component';
import {ModuleWithProviders} from '@angular/core';
import {PatientSummaryComponent} from './patient-summary.component';
import {PatientDemographicsComponent} from './patient-demographics.component';
import {PatientImmunisationsComponent} from "./patient-immunisations/patient-immunisations.component";

const patientRoutes: Routes = [
  {
    path: 'patients',
    component: PatientShellComponent
  },
  {
    path: 'patients/:id',
    component: PatientShellComponent,
    children: [
      {path: '', component: PatientSummaryComponent},
      {path: 'basic-details-edit', component: PatientDemographicsComponent},
      {path: 'immunisations-view', component: PatientImmunisationsComponent},
      {path: 'summary-view', component: PatientSummaryComponent}
    ]
  }
];

export const patientRouting: ModuleWithProviders = RouterModule.forChild(patientRoutes);
