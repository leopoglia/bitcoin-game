import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dois',
  templateUrl: './dois.component.html',
  styleUrls: ['./dois.component.css']
})
export class DoisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("level", "2");
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
