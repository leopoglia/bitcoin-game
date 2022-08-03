import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nickname = localStorage.getItem("nickname")


  ranking= 
    [{nome: 'leocpx', tempo: '5'},
    {nome: 'leocpx', tempo: '5'},
    {nome: 'leocpx', tempo: '5'},
    {nome: 'leocpx', tempo: '5'}]
  
}
