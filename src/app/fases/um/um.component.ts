import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-um',
  templateUrl: './um.component.html',
  styleUrls: ['./um.component.css']
})
export class UmComponent implements OnInit {

  constructor() {

  }



  ngOnInit() {

    for (let i = 0; i < 5; i++) {
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

  velocidade;
  inimigos: any = document.getElementsByClassName('inimigos');

}