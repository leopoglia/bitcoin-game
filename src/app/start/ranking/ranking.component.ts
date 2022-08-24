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

    for (let i = 0; i < this.rankings.length; i++) {
      if (this.rankings[i].fase == 1) {
        this.ranking1.push(this.rankings[i]);
      } else if (this.rankings[i].fase == 2) {
        this.ranking2.push(this.rankings[i]);
      } else if (this.rankings[i].fase == 3) {
        this.ranking3.push(this.rankings[i]);
      } else if (this.rankings[i].fase == 4) {
        this.ranking4.push(this.rankings[i]);
      } else if (this.rankings[i].fase == 5) {
        this.ranking5.push(this.rankings[i]);
      } else if (this.rankings[i].fase == 6) {
        this.ranking6.push(this.rankings[i]);
      }
    }
  }

  fase(fase) {
    if (fase == 1) {
      this.rankingatual = this.ranking1;
    } else if (fase == 2) {
      this.rankingatual = this.ranking2;
    } else if (fase == 3) {
      this.rankingatual = this.ranking3;
    } else if (fase == 4) {
      this.rankingatual = this.ranking4;
    } else if (fase == 5) {
      this.rankingatual = this.ranking5;
    } else if (fase == 6) {
      this.rankingatual = this.ranking6;
    }
  }

  nickname = localStorage.getItem("nickname")


  ranking = JSON.parse(localStorage.getItem('lista'));
  rankings = this.ranking;
  rankingatual;
  ranking1 = [];
  ranking2 = [];
  ranking3 = [];
  ranking4 = [];
  ranking5 = [];
  ranking6 = [];
}
