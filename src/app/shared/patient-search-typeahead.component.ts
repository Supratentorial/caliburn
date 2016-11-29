/**
 * Created by blake on 28/11/2016.
 */
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {PatientService} from './patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'patient-search-typeahead',
  template: require('./patient-search-typeahead.component.html'),
  styles: [`.form-control { width: 300px; }`]
})
export class PatientSearchTypeaheadComponent {

  searching: boolean;
  selectedPatient: any;

  constructor(private patientService: PatientService, private router: Router) {

  }

  onSelect($event, input) {
    $event.preventDefault();
    this.router.navigate(['/patients', $event.item.id]);
  };

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .do(term => {
        this.searching = term.length > 0;
      })
      .switchMap(term => term === '' ? Observable.of([]) : this.patientService.searchPatients(term))
      .do(() => {
        this.searching = false;
      })
}
