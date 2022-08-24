import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.component.html',
  styleUrls: ['./seis.component.css']
})
export class SeisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("moedas", '0');
    this.startTimer();
    localStorage.setItem("level", "6");
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.tempo = localStorage.getItem('tempo')
    }, 200)
  }


  sim() {
    location.reload()
  }

  nick = localStorage.getItem("nickname")
  velocidade;
  tempo;
  interval;
}
