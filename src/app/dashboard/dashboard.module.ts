/**
 * Created by blake on 28/11/2016.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardShellComponent} from './dashboard-shell.component';

@NgModule({
  declarations: [DashboardShellComponent],
  imports: [CommonModule],
  exports: [DashboardShellComponent]

})
export class DashboardModule {}
