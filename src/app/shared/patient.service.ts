/**
 * Created by blake on 28/11/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/observable';
import * as _ from 'lodash';
import * as moment from 'moment';

import Bundle = fhir.Bundle;
import {PatientDTO} from '../patients/patientDTO';
import Patient = fhir.Patient;
import ContactPoint = fhir.ContactPoint;

@Injectable()
export class PatientService {

  private patientsUrl = 'http://52.72.172.54:8080/fhir/baseDstu2/Patient';

  constructor(private http: Http) {

  }

  searchPatients(searchTerm: string): Observable<PatientDTO[]> {
    let params = new URLSearchParams();
    params.set('name', searchTerm);
    params.set('_count', '10');
    params.set('_pretty', 'true');
    return this.http.get(this.patientsUrl, {search: params}).map(PatientService.processSearchResults).catch(PatientService.handleError);
  }

  getPatientById(patientId: string): Observable<PatientDTO> {
    let params = new URLSearchParams();
    params.set('_id', patientId);
    params.set('_pretty', 'true');
    return this.http.get(this.patientsUrl, {search: params}).map(PatientService.processPatient).catch(PatientService.handleError);
  }

  static mapToPatientDTO(patient: Patient): PatientDTO {
    let patientDTO: PatientDTO = new PatientDTO();
    patientDTO.id = patient.id;
    //patientDTO.title = patient.name[0].prefix[0];
    patientDTO.givenName = patient.name[0].given[0];
    patientDTO.familyName = _.map(patient.name[0].family).join(' ');
    patientDTO.birthDate = patient.birthDate;
    patientDTO.age = PatientService.getAgeString(patient.birthDate);
    patientDTO.gender = _.capitalize(patient.gender);
    patientDTO.workNumbers = _.filter(patient.telecom, (object: ContactPoint) => object.use === 'work' && object.system === 'phone');
    patientDTO.mobileNumbers = _.filter(patient.telecom, (object: ContactPoint) => object.use === 'mobile' && object.system === 'phone');
    patientDTO.homeNumbers = _.filter(patient.telecom, (object: ContactPoint) => object.use === 'home' && object.system === 'phone');
    patientDTO.emailAddresses = _.filter(patient.telecom, (object: ContactPoint) => object.system === 'email');
    return patientDTO;
  }

  static processPatient(res: Response) {
    let body: Bundle = res.json();
    if (body.total === 0) {
      console.log('No patientDTO found with that ID');
    }
    if (body.total > 1) {
      console.log('More than one patientDTO returned');
    }

    return PatientService.mapToPatientDTO(<PatientDTO>body.entry[0].resource);
  }

  static getAgeString(birthDate: string): string {
    let age = moment().diff(moment(birthDate, 'YYYY-MM-DD'), 'years');
    let ageString = age.toString();
    if (age < 1) {
      ageString = moment().diff(moment(birthDate, 'YYYY-MM-DD'), 'months').toString() + ' months';
    }
    return ageString;
  }

  static processSearchResults(res: Response) {
    let body: any = res.json();
    if (body.total === 0) {
      return [];
    }
    let results: Array<PatientDTO> = [];
    for (let i = 0; i < body.entry.length; i++) {
      let patient: Patient;
      if (body.entry[i].resource) {
        patient = body.entry[i].resource;
      }

      results.push(PatientService.mapToPatientDTO(patient));
    }

    return results;
  }

  static handleError(error: any) {
    let errorMsg = error.message;
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
