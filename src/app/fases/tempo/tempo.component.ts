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
      this.morte = localStorage.getItem('morte');
      if (this.segundos > 0) {
        if (this.morte == "false") {
          this.segundos--;
        }
      } else {
        localStorage.setItem('morte', 'true');
      }
    }, 1000)
  }

  morte: any = localStorage.setItem('morte', 'false');
  interval;
  segundos = 10;


}
