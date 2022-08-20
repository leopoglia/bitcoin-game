import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-um',
  templateUrl: './um.component.html',
  styleUrls: ['./um.component.css']
})
export class UmComponent implements OnInit {

  constructor(private Router: Router) {
  }

  segundos = 0;

  ngOnInit() {
    localStorage.setItem("moedas", '0');
    this.startTimer();
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