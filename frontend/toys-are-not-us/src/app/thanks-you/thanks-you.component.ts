import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-thanks-you',
  templateUrl: './thanks-you.component.html',
  styleUrls: ['./thanks-you.component.css'],
  providers: [DatePipe],
})
export class ThanksYouComponent implements OnInit {
  // myDate = new Date();
  constructor(private datePipe: DatePipe) {
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyyMMdd');
  }
  ngOnInit(): void {}
}
