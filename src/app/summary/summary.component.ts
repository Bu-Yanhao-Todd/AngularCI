import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['../app.component.css']
})
export class SummaryComponent implements OnInit {

applicationId = '20180223000034568';
status = 'Reject';

  constructor() {
  //call service get data
    this.applicationId = '20180223000034569';
    this.status = 'Booked';
  }

  ngOnInit() {
  }

}
