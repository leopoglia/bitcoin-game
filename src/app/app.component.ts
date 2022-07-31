import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';

  ngOnInit() {
    this.audio.src = "../../../assets/minecraft.mp3";
    this.audio.load();
    this.audio.play();
  }
  audio: any = new Audio();

}

