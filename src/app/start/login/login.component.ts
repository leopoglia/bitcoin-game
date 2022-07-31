import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { a } from '@angular/core/src/render3';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  entrar() {
    if (this.nickname != "") {
      localStorage.setItem("nickname", this.nickname)
      this.route.navigate(['inicio']);
    } else {
      this.erro = true
      setTimeout( () => {
        this.erro = false
      }, 1000*4);
    }
  }

  erro;
  nickname = "";
}
