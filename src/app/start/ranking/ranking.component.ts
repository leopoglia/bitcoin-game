import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.ranking)
  }

  nickname = localStorage.getItem("nickname")


  ranking:any = JSON.parse(localStorage.getItem('lista'));
  rankingcerto = this.ranking;

}
