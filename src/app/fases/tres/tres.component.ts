import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("moedas", '0');
    this.startTimer();
    localStorage.setItem("level", "3");
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
