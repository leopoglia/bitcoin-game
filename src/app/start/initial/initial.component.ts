import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  constructor() {

    localStorage.setItem('ganhou', "0");
  }

  ngOnInit() {
    if (localStorage.getItem("nivel") == "2") {
      document.querySelector("body > div.personagens > div:nth-child(2) > img").classList.toggle("atual");
      this.fase = "fase/2";
    } else if (localStorage.getItem("nivel") == "3") {
      document.querySelector("body > div.personagens > div:nth-child(2) > img").classList.toggle("atual");
      document.querySelector("body > div.personagens > div:nth-child(3) > img").classList.toggle("atual")
      this.fase = "fase/3";
    } else if (localStorage.getItem("nivel") == "4") {
      document.querySelector("body > div.personagens > div:nth-child(2) > img").classList.toggle("atual");
      document.querySelector("body > div.personagens > div:nth-child(3) > img").classList.toggle("atual")
      document.querySelector("body > div.personagens > div:nth-child(4) > img").classList.toggle("atual")
      this.fase = "fase/4";
    } else if (localStorage.getItem("nivel") == "5") {
      document.querySelector("body > div.personagens > div:nth-child(2) > img").classList.toggle("atual");
      document.querySelector("body > div.personagens > div:nth-child(3) > img").classList.toggle("atual")
      document.querySelector("body > div.personagens > div:nth-child(4) > img").classList.toggle("atual")
      document.querySelector("body > div.personagens > div:nth-child(5) > img").classList.toggle("atual")
      this.fase = "fase/5";
    } else if (localStorage.getItem("nivel") == "6") {
      document.querySelector("body > div.personagens > div:nth-child(2) > img").classList.toggle("atual");
      document.querySelector("body > div.personagens > div:nth-child(3) > img").classList.toggle("atual")
      document.querySelector("body > div.personagens > div:nth-child(4) > img").classList.toggle("atual")
      document.querySelector("body > div.personagens > div:nth-child(5) > img").classList.toggle("atual")
      document.querySelector("body > div.personagens > div:nth-child(6) > img").classList.toggle("atual")
      this.fase = "fase/6";
    }

  }

  nickname = localStorage.getItem("nickname")
  fase = "fase/1";
}
