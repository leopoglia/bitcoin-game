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
      console.log(localStorage.getItem('moedas'))

      if(localStorage.getItem('moedas') == 'moedas'){
      }else{
        this.moedas = localStorage.getItem('moedas');
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
  moedas:any = 0;
  interval;
  segundos = 10;


}
