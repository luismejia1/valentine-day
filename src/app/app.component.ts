import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ramdomNumber = 1;
  fontSize = 16;

  arrNegativeResponse = [
    'No',
    'Estás segura?',
    'Muy segura?',
    'Ok, ya, estás realmente segura?',
    'Por favor, di que si',
    'Sólo piensalo',
    'Si sigues diciendo que no, me pondré muy triste',
    'Muy muy muuuy triste',
    'Ok, ya no voy a preguntar más',
    'Es broma, POR FAVOR DI QUE SI',
  ];

  message = this.arrNegativeResponse[0];
  question = 'Quieres ser mi San Valentín?';

  yesButtonCliked: boolean = false;

  constructor() {}

  onClickNo() {
    this.message = this.arrNegativeResponse[this.getRandomNumber()];
    this.fontSize *= 1.3;
  }

  onClickYes() {
    this.yesButtonCliked = true;
    this.question = 'Tu mensaje para cuando te acepte';
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }
}
