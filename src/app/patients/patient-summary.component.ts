/**
 * Created by blake on 28/11/2016.
 */
import {Component, OnInit} from "@angular/core";
import {PatientManagerService} from "./patient-manager.service";
import {Subscription} from "rxjs";
import {PatientDTO} from "./patientDTO";

@Component({
    selector: 'patient-summary',
    template: require('./patient-summary.component.html')
  }
)
export class PatientSummaryComponent implements OnInit{

  currentPatient : PatientDTO;
  currentPatientSubscription : Subscription;

  constructor(private patientManagerService: PatientManagerService) {
  }

  ngOnInit(): void{
    this.currentPatient = this.patientManagerService.currentPatient;
    this.currentPatientSubscription = this.patientManagerService.currentPatientEvent.subscribe((value) => {
      this.currentPatient = value;
    });
  }

}
