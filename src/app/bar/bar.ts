import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMartiniGlassCitrus,
  faBeerMugEmpty,
  faWineBottle,
  faWhiskeyGlass,
  faLemon,
  faDiceFour,
  faSmoking,
  faBurger,
  faFutbol,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bar',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './bar.html',
  styleUrl: './bar.scss',
})
export class Bar implements OnInit {
  scene!: Scene;

  faMartiniGlassCitrus = faMartiniGlassCitrus;

  ngOnInit(): void {
    this.scene = {
      name: 'Bar',
      backgroundUrl: 'bar.jpg',
      objects: [
        {
          name: 'Cocktail',
          icon: faMartiniGlassCitrus,
          size: '5x',
          style: {
            top: 300,
            left: 40,
            opacity: 0.5,
          },
          classes: ['green-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Bierglas',
          icon: faBeerMugEmpty,
          size: '2x',
          style: {
            top: 210,
            left: 197,
            opacity: 0.66,
          },
          classes: ['grey'],
        },
        {
          name: 'Weinflasche',
          icon: faWineBottle,
          size: '3x',
          style: {
            top: 40,
            left: 236,
            transform: 'rotate(-40deg)',
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Whiskey',
          icon: faWhiskeyGlass,
          size: '2x',
          style: {
            top: 404,
            left: 192,
            opacity: 0.5,
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Zitrone',
          icon: faLemon,
          size: '1x',
          style: {
            top: 17,
            left: 257,
            opacity: 0.8,
            transform: 'rotate(70deg)',
          },
          classes: ['white'],
        },
        {
          name: 'Würfel',
          icon: faDiceFour,
          size: '2x',
          style: {
            top: 370,
            left: 300,
            transform: 'rotate(16deg)',
          },
          classes: ['white', 'circle-shadow-dark'],
        },
        {
          name: 'Zigarette',
          icon: faSmoking,
          size: '1x',
          style: {
            top: 135,
            left: 120,
            transform: 'rotate(6deg)',
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Hamburger',
          icon: faBurger,
          size: '6x',
          style: {
            top: 44,
            left: 80,
            opacity: 0.1,
          },
          classes: ['white'],
        },
        {
          name: 'Fußball',
          icon: faFutbol,
          size: '1x',
          style: {
            top: 282,
            left: 198,
            opacity: 0.91,
          },
          classes: ['black'],
        },
        {
          name: 'Spielkarte',
          icon: faMoneyBill,
          size: '2x',
          style: {
            top: 338,
            left: 208,
            opacity: 0.5,
            transform: 'rotate(103deg)',
          },
          classes: ['red', 'circle-shadow-dark'],
        },
      ],
    };
  }
}
