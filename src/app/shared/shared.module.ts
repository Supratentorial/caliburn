/**
 * Created by blake on 28/11/2016.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientSearchTypeaheadComponent} from './patient-search-typeahead.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FloatingLabelDirective } from './floating-label.directive';

@NgModule({
  declarations: [PatientSearchTypeaheadComponent, FloatingLabelDirective],
  imports: [CommonModule, FormsModule, NgbModule, RouterModule],
  exports: [PatientSearchTypeaheadComponent, FloatingLabelDirective],
  providers: []
})

export class SharedModule {
}
