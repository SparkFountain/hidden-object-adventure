import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHippo,
  faCrow,
  faDog,
  faSpider,
  faFeatherAlt,
  faFrog,
  faCat,
  faKiwiBird,
  faOtter,
  faCarrot,
} from '@fortawesome/free-solid-svg-icons';
import { SceneComponent } from '../scene/scene';

@Component({
  selector: 'app-zoo',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './zoo.html',
  styleUrl: './zoo.scss',
})
export class ZooComponent implements OnInit {
  scene!: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Zoo',
      backgroundUrl: 'zoo.jpg',
      objects: [
        {
          name: 'Flusspferd',
          icon: faHippo,
          size: '2x',
          style: {
            top: 400,
            left: 300,
            transform: 'scale(-1,1)',
          },
          classes: ['red-dark'],
        },
        {
          name: 'Krähe',
          icon: faCrow,
          size: '1x',
          style: {
            top: 80,
            left: 250,
            transform: 'rotate(30deg)',
          },
          classes: ['green'],
        },
        {
          name: 'Hund',
          icon: faDog,
          size: '1x',
          style: {
            top: 380,
            left: 164,
            transform: 'rotate(-15deg)',
          },
          classes: ['black'],
        },
        {
          name: 'Spinne',
          icon: faSpider,
          size: '5x',
          style: {
            top: 170,
            left: 120,
            opacity: 0.5,
            transform: 'rotate(90deg)',
          },
        },
        {
          name: 'Feder',
          icon: faFeatherAlt,
          size: '2x',
          style: {
            top: 55,
            left: 182,
            transform: 'scale(-1,1) rotate(70deg)',
          },
        },
        {
          name: 'Frosch',
          icon: faFrog,
          size: '2x',
          style: {
            top: 410,
            left: 20,
          },
          classes: ['red', 'circle-shadow-dark'],
        },
        {
          name: 'Katze',
          icon: faCat,
          size: '3x',
          style: {
            top: 5,
            left: 70,
            opacity: 0.5,
          },
          classes: ['grey', 'circle-shadow-light'],
        },
        {
          name: 'Kiwi-Vogel',
          icon: faKiwiBird,
          size: '2x',
          style: {
            top: 227,
            left: 323,
            transform: 'scale(-1,1) rotate(-25deg)',
            opacity: 0.4,
          },
          classes: ['green-dark', 'circle-shadow-light'],
        },
        {
          name: 'Otter',
          icon: faOtter,
          size: '3x',
          style: {
            top: 100,
            left: 100,
            transform: 'rotate(5deg)',
          },
          classes: ['black'],
        },
        {
          name: 'Karotte',
          icon: faCarrot,
          size: '4x',
          style: {
            top: 107,
            left: 282,
            transform: 'rotate(160deg)',
          },
          classes: ['red-dark', 'circle-shadow-light'],
        },
      ],
    };
  }
}
