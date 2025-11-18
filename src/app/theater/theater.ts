import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPersonBooth,
  faClock,
  faCompactDisc,
  faAward,
  faChair,
  faDrum,
  faUserSecret,
  faFireExtinguisher,
  faGem,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theater',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './theater.html',
  styleUrl: './theater.scss',
})
export class TheaterComponent implements OnInit {
  scene!: Scene;

  ngOnInit(): void {
    this.scene = {
      name: 'Theater',
      backgroundUrl: 'theater.jpg',
      objects: [
        {
          name: 'Umkleidekabine',
          icon: faPersonBooth,
          size: '4x',
          style: {
            top: 360,
            left: 228,
            opacity: 0.7,
          },
          classes: ['red-dark'],
        },
        {
          name: 'Uhr',
          icon: faClock,
          size: '2x',
          style: {
            top: 73,
            left: 166,
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Schallplatte',
          icon: faCompactDisc,
          size: '2x',
          style: {
            top: 307,
            left: 5,
          },
          classes: ['black'],
        },
        {
          name: 'Abzeichen',
          icon: faAward,
          size: '2x',
          style: {
            top: 334,
            left: 117,
          },
          classes: ['red', 'circle-shadow-dark'],
        },
        {
          name: 'Stuhl',
          icon: faChair,
          size: '3x',
          style: {
            top: 365,
            left: 303,
            opacity: 0.5,
          },
          classes: ['grey'],
        },
        {
          name: 'Trommel',
          icon: faDrum,
          size: '6x',
          style: {
            top: 135,
            left: 128,
            opacity: 0.75,
          },
          classes: ['red-dark'],
        },
        {
          name: 'Detektiv',
          icon: faUserSecret,
          size: '2x',
          style: {
            top: 212,
            left: 40,
            transform: 'rotate(27deg)',
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Feuerlöscher',
          icon: faFireExtinguisher,
          size: '2x',
          style: {
            top: 222,
            left: 264,
            transform: 'scale(-1,1)',
            opacity: 0.3,
          },
          classes: ['red'],
        },
        {
          name: 'Diamant',
          icon: faGem,
          size: '1x',
          style: {
            top: 184,
            left: 270,
          },
          classes: ['circle-shadow-dark'],
        },
        {
          name: 'Regenschirm',
          icon: faUmbrella,
          size: '4x',
          style: {
            top: 47,
            left: 256,
            transform: 'rotate(10deg)',
            opacity: 0.5,
          },
          classes: ['black', 'circle-shadow-light'],
        },
      ],
    };
  }
}
