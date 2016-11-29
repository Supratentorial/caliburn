/**
 * Created by blake on 28/11/2016.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentsShellComponent} from './appointments-shell.component';


@NgModule({
  declarations: [AppointmentsShellComponent],
  imports: [CommonModule],
  exports: [AppointmentsShellComponent]
})
export class AppointmentsModule {}
