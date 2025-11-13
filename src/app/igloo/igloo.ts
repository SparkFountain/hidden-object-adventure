import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSleigh,
  faCookieBite,
  faMoon,
  faBroom,
  faDragon,
  faBalanceScale,
  faToiletPaper,
  faTrailer,
  faHammer,
  faOilCan,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-igloo',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './igloo.html',
  styleUrl: './igloo.scss',
})
export class IglooComponent implements OnInit {
  scene!: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Siedlung',
      backgroundUrl: 'igloo.jpg',
      objects: [
        {
          name: 'Schlitten',
          icon: faSleigh,
          size: '3x',
          style: {
            top: 406,
            left: 50,
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Angeknabberter Keks',
          icon: faCookieBite,
          size: '1x',
          style: {
            top: 246,
            left: 222,
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
        {
          name: 'Mondsichel',
          icon: faMoon,
          size: '2x',
          style: {
            top: 20,
            left: 120,
            opacity: 0.25,
          },
        },
        {
          name: 'Besen',
          icon: faBroom,
          size: '2x',
          style: {
            top: 381,
            left: 300,
            transform: 'rotate(-40deg)',
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Drachen',
          icon: faDragon,
          size: '1x',
          style: {
            top: 345,
            left: 107,
            transform: 'rotate(-55deg)',
          },
          classes: ['green-dark'],
        },
        {
          name: 'Balkenwaage',
          icon: faBalanceScale,
          size: '1x',
          style: {
            top: 220,
            left: 13,
            opacity: 0.25,
          },
          classes: ['grey'],
        },
        {
          name: 'Toilettenpapier',
          icon: faToiletPaper,
          size: '1x',
          style: {
            top: 313,
            left: 298,
            opacity: 0.8,
          },
          classes: ['circle-shadow-dark'],
        },
        {
          name: 'Anhänger',
          icon: faTrailer,
          size: '7x',
          style: {
            top: 90,
            left: 180,
            transform: 'rotate(60deg)',
            opacity: 0.15,
          },
          classes: ['green'],
        },
        {
          name: 'Hammer',
          icon: faHammer,
          size: '1x',
          style: {
            top: 387,
            left: 222,
            transform: 'rotate(-25deg)',
            opacity: 0.85,
          },
          classes: ['red'],
        },
        {
          name: 'Ölkanne',
          icon: faOilCan,
          size: '2x',
          style: {
            top: 291,
            left: 210,
            opacity: 0.3,
          },
          classes: ['grey', 'circle-shadow-light'],
        },
      ],
    };
  }
}
