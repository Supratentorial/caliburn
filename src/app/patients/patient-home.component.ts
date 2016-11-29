/**
 * Created by blake on 28/11/2016.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'patient-home',
  template: require('./patient-home.component.html')
})
export class PatientHomeComponent implements OnInit, OnDestroy {

  navSubscription: Subscription;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.navSubscription = this.route.params.subscribe((params)=>{

    });
  }

  ngOnDestroy(): void {
    this.navSubscription.unsubscribe();
  }
}
