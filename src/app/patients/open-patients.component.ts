/**
 * Created by blake on 28/11/2016.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {PatientManagerService} from './patient-manager.service';

import {Subscription} from 'rxjs';
import {PatientDTO} from './patientDTO';
@Component({
  selector: 'open-patients',
  template: require('./open-patients.component.html')
})
export class OpenPatientsComponent implements OnInit, OnDestroy {

  openPatients: Array<PatientDTO> = [];
  openPatientsSubscription : Subscription;

  constructor(private patientManagerService: PatientManagerService) {

  }

  ngOnInit(): void {
    this.openPatients = this.patientManagerService.openPatients;
    this.openPatientsSubscription = this.patientManagerService.openPatientsEvent.subscribe((value) => {
      this.openPatients = value;
    });
  }

  closePatient($event, patientId : string): void{
    $event.stopPropagation();
    console.log(patientId);
    if(patientId) {
      this.patientManagerService.removePatientFromOpenList(patientId);
    }
  }

  ngOnDestroy(): void {
  }
}
