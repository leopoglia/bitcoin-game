import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.component.html',
  styleUrls: ['./cinco.component.css']
})
export class CincoComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
    localStorage.setItem("moedas", '0');
    this.startTimer();
    localStorage.setItem("level", "5");
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
