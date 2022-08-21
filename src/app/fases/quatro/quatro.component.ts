import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quatro',
  templateUrl: './quatro.component.html',
  styleUrls: ['./quatro.component.css']
})
export class QuatroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("moedas", '0');
    this.startTimer();
    localStorage.setItem("level", "4");
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
