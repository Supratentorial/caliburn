/**
 * Created by blake on 28/11/2016.
 */
import {Subject} from "rxjs";
import {PatientDTO} from "./patientDTO";

export class PatientManagerService{

  openPatients: PatientDTO[] = [];
  openPatientsEvent : Subject<PatientDTO[]> = new Subject<PatientDTO[]>();
  currentPatient : PatientDTO;
  currentPatientEvent : Subject<PatientDTO> = new Subject<PatientDTO>();


  constructor(){

  }

  addPatientToOpenList(patient:PatientDTO){
    console.log(patient);
    this.openPatients.push(patient);
    this.openPatientsEvent.next(this.openPatients);
  }

  isPatientOpen(patientId: string): boolean {
    for (var i = 0; i < this.openPatients.length; i++) {
      if (patientId === this.openPatients[i].id) {
        return true;
      }
    }
    return false;
  }

  removePatientFromOpenList(patientId: string): void {
    for (var i; i < this.openPatients; i++) {
      if (patientId === this.openPatients[i].id) {
        var index = this.openPatients.indexOf(this.openPatients[i]);
        this.openPatients.splice(index, 1);
      }
    }
  }

  setCurrentPatient(patientId: string): void {
    if (patientId) {
      for (var i = 0; i < this.openPatients.length; i++) {
        if (patientId === this.openPatients[i].id) {
          this.currentPatient = this.openPatients[i];
          this.currentPatientEvent.next(this.currentPatient);
        }
      }
    }
  }

}
