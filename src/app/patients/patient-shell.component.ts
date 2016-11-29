/**
 * Created by blake on 28/11/2016.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {PatientManagerService} from "./patient-manager.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../shared/patient.service";
import Patient = fhir.Patient;

@Component({
  selector: 'patient-shell',
  template: require('./patient-shell.component.html')
})
export class PatientShellComponent implements OnInit, OnDestroy {

  private navSubscription: Subscription;

  constructor(private patientManagerService: PatientManagerService, private patientService: PatientService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.navSubscription = this.route.params.subscribe(params => {
      let patientId: string = params['id'];
      if (patientId) {
        if (this.patientManagerService.isPatientOpen(patientId)) {
          this.patientManagerService.setCurrentPatient(patientId);
        } else {
          this.patientService.getPatientById(params['id']).subscribe(
            patient => {
              this.patientManagerService.addPatientToOpenList(patient);
              this.patientManagerService.setCurrentPatient(patient.id);
            },
            error => console.log(error)
          )
        }
      }
    })
  }

  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }

}
