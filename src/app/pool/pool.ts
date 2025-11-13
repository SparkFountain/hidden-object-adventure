import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faShower,
  faTint,
  faSwimmingPool,
  faShip,
  faHatCowboy,
  faVolleyballBall,
  faFish,
  faCloudShowersHeavy,
  faAnchor,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pool',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './pool.html',
  styleUrl: './pool.scss',
})
export class PoolComponent implements OnInit {
  scene!: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Schwimmbad',
      backgroundUrl: 'pool.jpg',
      objects: [
        {
          name: 'Duschkopf',
          icon: faShower,
          size: '3x',
          style: {
            top: 180,
            left: 82,
          },
          classes: ['circle-shadow-light'],
        },
        {
          name: 'Wassertropfen',
          icon: faTint,
          size: '1x',
          style: {
            top: 196,
            left: 262,
          },
          classes: ['green'],
        },
        {
          name: 'Leiter',
          icon: faSwimmingPool,
          size: '3x',
          style: {
            top: 300,
            left: 262,
          },
          classes: ['grey'],
        },
        {
          name: 'Schiff',
          icon: faShip,
          size: '2x',
          style: {
            top: 400,
            left: 262,
            transform: 'rotate(12deg)',
            opacity: 0.8,
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Cowboyhut',
          icon: faHatCowboy,
          size: '1x',
          style: {
            top: 107,
            left: 180,
          },
          classes: ['red'],
        },
        {
          name: 'Wasserball',
          icon: faVolleyballBall,
          size: '2x',
          style: {
            top: 299,
            left: 88,
          },
          classes: ['green-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Fisch',
          icon: faFish,
          size: '1x',
          style: {
            top: 432,
            left: 88,
            opacity: 0.4,
          },
          classes: ['black'],
        },
        {
          name: 'Regenwolke',
          icon: faCloudShowersHeavy,
          size: '2x',
          style: {
            top: 10,
            left: 188,
          },
          classes: ['grey', 'circle-shadow-light'],
        },
        {
          name: 'Anker',
          icon: faAnchor,
          size: '1x',
          style: {
            top: 340,
            left: 118,
          },
          classes: ['red'],
        },
        {
          name: 'Rettungsring',
          icon: faLifeRing,
          size: '3x',
          style: {
            top: 40,
            left: 18,
            opacity: 0.2,
            transform: 'rotate(23deg)',
          },
          classes: ['red'],
        },
      ],
    };
  }
}
