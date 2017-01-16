import {Component, OnInit} from '@angular/core';
import {PatientManagerService} from './patient-manager.service';
import Patient = fhir.Patient;
import {PatientDTO} from './patientDTO';
import {Location} from "@angular/common";
@Component({
  selector: 'patient-demographics',
  template: require('./patient-demographics.component.html')
})

export class PatientDemographicsComponent implements OnInit {

  patientDTO : PatientDTO;

  constructor(private patientManagerService: PatientManagerService, private location : Location) {

  }

  cancelEdit(){
    this.location.back();
  }

  ngOnInit(): void {
    this.patientDTO = this.patientManagerService.currentPatient;
  }
}
