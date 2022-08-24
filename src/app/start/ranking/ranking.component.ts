import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.rankingatual = this.ranking1;

    for (let i = 0; i < this.ranking.length; i++) {
      if (this.ranking[i].fase == 1) {
        this.ranking1.push(this.ranking[i]);
      } else if (this.ranking[i].fase == 2) {
        this.ranking2.push(this.ranking[i]);
      } else if (this.ranking[i].fase == 3) {
        this.ranking3.push(this.ranking[i]);
      } else if (this.ranking[i].fase == 4) {
        this.ranking4.push(this.ranking[i]);
      } else if (this.ranking[i].fase == 5) {
        this.ranking5.push(this.ranking[i]);
      } else if (this.ranking[i].fase == 6) {
        this.ranking6.push(this.ranking[i]);
      }
    }
  }

  fase(fase) {
    if (fase == 1) {
      this.rankingatual = this.ranking1.sort((a, b) => { return a.tempo - b.tempo});
    } else if (fase == 2) {
      this.rankingatual = this.ranking2.sort((a, b) => { return a.tempo - b.tempo});
    } else if (fase == 3) {
      this.rankingatual = this.ranking3.sort((a, b) => { return a.tempo - b.tempo});
    } else if (fase == 4) {
      this.rankingatual = this.ranking4.sort((a, b) => { return a.tempo - b.tempo});
    } else if (fase == 5) {
      this.rankingatual = this.ranking5.sort((a, b) => { return a.tempo - b.tempo});
    } else if (fase == 6) {
      this.rankingatual = this.ranking6.sort((a, b) => { return a.tempo - b.tempo});
    }
  }

  nickname = localStorage.getItem("nickname")


  ranking = JSON.parse(localStorage.getItem('lista'));
  rankingatual = this.ranking.sort((a, b) => {return a.tempo - b.tempo});
  ranking1 = [];
  ranking2 = [];
  ranking3 = [];
  ranking4 = [];
  ranking5 = [];
  ranking6 = [];
}
