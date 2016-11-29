/**
 * Created by blake on 28/11/2016.
 */
import {URLSearchParams, Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import Appointment = fhir.Appointment;
import date = fhir.date;

@Injectable()
export class AppointmentsService {

  private appointmentsUrl = 'http://fhirtest.uhn.ca/baseDstu2/Appointment';

  constructor(private http: Http) {

  }

  getAppointmentsByDate(date: date): Observable<Appointment[]> {
    let params = new URLSearchParams();
    params.set('date', date);
    params.set('_pretty', 'true');
    return this.http.get(this.appointmentsUrl, {search: params}).map(this.processAppointments).catch(this.handleError);
  }

  processAppointments(response : Response): Appointment[]{
    let body : fhir.Bundle = response.json();
    if(body.total === 0){
      return [];
    }
    console.log(body.entry);
    return <Appointment[]> body.entry;
  }

  handleError(error : any){
    let errorMsg = error.message;
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
