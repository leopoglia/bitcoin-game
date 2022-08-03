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

      if (localStorage.getItem('moedas') == 'moedas') {
        console.log("10")
      } else {
        this.moedas = localStorage.getItem('moedas');
      }

      if (localStorage.getItem('moedas') == "3") {
        this.tempo = this.segundostotal - this.segundos;
        localStorage.setItem('tempo', this.tempo);
      }


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
  moedas: any = 0;
  tempo: any;
  interval;
  segundos = 10;
  segundostotal = 10;


}
