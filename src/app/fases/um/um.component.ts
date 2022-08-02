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



  ngOnInit() {
    for (let i = 0; i < 6; i++) {
      this.velocidade = Math.floor(Math.random() * 50);
      console.log(this.velocidade)
      if (this.velocidade > 50) {
        this.inimigos[i].style = `animation: inimigos linear infinite ${this.velocidade}s; top: ${Math.floor(Math.random() * 400)}px;`;

      } else {
        this.inimigos[i].style = `animation: inimigos linear infinite ${this.velocidade + 10}s; top: ${Math.floor(Math.random() * 400)}px;`;
      }
    }

  }

  moeda() {
    if (localStorage.getItem('ganhou') == "1") {
      alert("Você ganhou!")
    }
  }

  sim() {
    location.reload()
  }

  velocidade;
  posicaoArvoresX;
  posicaoArvoresY;
  arvores:any = document.getElementsByClassName('arvores');
  inimigos: any = document.getElementsByClassName('inimigos');

}