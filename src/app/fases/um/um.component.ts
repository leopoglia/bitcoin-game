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

  }

  sim() {
    location.reload()
  }

  nick = localStorage.getItem("nickname")
  velocidade;
  posicaoArvoresX;
  posicaoArvoresY;
  arvores: any = document.getElementsByClassName('arvores');
  inimigos: any = document.getElementsByClassName('inimigos');

}