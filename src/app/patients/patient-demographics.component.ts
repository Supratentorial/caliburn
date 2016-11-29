/**
 * Created by blake on 28/11/2016.
 */
import {Component, OnInit} from '@angular/core';
import {PatientManagerService} from './patient-manager.service';
import Patient = fhir.Patient;
import {PatientDTO} from './patientDTO';
@Component({
  selector: 'patient-demographics',
  template: require('./patient-demographics.component.html')
})

export class PatientDemographicsComponent implements OnInit {

  patientDTO : PatientDTO;

  constructor(private patientManagerService: PatientManagerService) {

  }


  ngOnInit(): void {
    this.patientDTO = this.patientManagerService.currentPatient;
    console.log(this.patientDTO.familyName);
    console.log(this.patientManagerService.currentPatient);
  }
}
