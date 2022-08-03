import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.startTimer();


  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.segundos > 0) {
        this.segundos--;
      } else {
        this.segundos = 60;
      }
    }, 1000)
  }

  interval;
  segundos = 100;


}
