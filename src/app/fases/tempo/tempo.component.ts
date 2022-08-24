import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log(this.fase)
    if (this.fase == "2") {
      this.segundos = 9;
      this.segundostotal = 9;
    } else if (this.fase == "3") {
      this.segundos = 8;
      this.segundostotal = 8;
    } else if (this.fase == "4") {
      this.segundos = 7;
      this.segundostotal = 7;
    } else if (this.fase == "5") {
      this.segundos = 6;
      this.segundostotal = 6;
    } else if (this.fase == "6") {
      this.segundos = 5;
      this.segundostotal = 5;
    }


    this.startTimer();


  }

  startTimer() {
    this.interval = setInterval(() => {

      this.morte = localStorage.getItem('morte');

      if (localStorage.getItem('moedas') == 'moedas') {
      } else {
        this.moedas = localStorage.getItem('moedas');
      }

      if (localStorage.getItem('moedas') == "3") {
        this.tempo = this.segundostotal - this.segundos;
        localStorage.setItem('tempo', this.tempo);


        if (this.wins == 1) {
          console.log(this.ganhadores)

          if (this.ganhadores == undefined) {
            this.ganhadores = []
          }
          this.ganhadores.push({ nome: this.nickname, tempo: this.tempo, fase: this.fase });
          localStorage.setItem('lista', JSON.stringify(this.ganhadores));
          this.wins = 0;
        }
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

  wins = 1;
  ganhadores = JSON.parse(localStorage.getItem('lista'));
  morte: any = localStorage.setItem('morte', 'false');
  nickname = localStorage.getItem('nickname')
  moedas: any = 0;
  tempo: any;
  fase = window.location.href.substr(-1);
  interval;
  segundos = 10;
  segundostotal = 10;


}
