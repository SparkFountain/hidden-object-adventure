import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSkiing,
  faGift,
  faGrinBeam,
  faChessPawn,
  faTree,
  faSnowman,
  faHollyBerry,
  faLeaf,
  faSnowplow,
  faMitten,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cableway',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './cableway.html',
  styleUrl: './cableway.scss',
})
export class CablewayComponent implements OnInit {
  scene!: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Seilbahn',
      backgroundUrl: 'cableway.jpg',
      objects: [
        {
          name: 'Skifahrer',
          icon: faSkiing,
          size: '2x',
          style: {
            top: 300,
            left: 250,
            opacity: 0.3,
            transform: 'rotate(45deg)',
          },
          classes: ['black'],
        },
        {
          name: 'Geschenk',
          icon: faGift,
          size: '2x',
          style: {
            top: 420,
            left: 250,
            opacity: 0.75,
          },
          classes: ['red', 'circle-shadow-dark'],
        },
        {
          name: 'Smiley',
          icon: faGrinBeam,
          size: '4x',
          style: {
            top: 3,
            left: 170,
            opacity: 0.2,
          },
          classes: ['grey'],
        },
        {
          name: 'Bauer',
          icon: faChessPawn,
          size: '2x',
          style: {
            top: 190,
            left: 120,
            transform: 'rotate(37deg)',
          },
          classes: ['green-dark'],
        },
        {
          name: 'Tanne',
          icon: faTree,
          size: '2x',
          style: {
            top: 350,
            left: 320,
            opacity: 0.5,
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Schneemann',
          icon: faSnowman,
          size: '3x',
          style: {
            top: 407,
            left: 127,
            opacity: 0.15,
            transform: 'rotate(-5deg)',
          },
          classes: ['circle-shadow-light'],
        },
        {
          name: 'Stechpalmenzweig',
          icon: faHollyBerry,
          size: '4x',
          style: {
            top: 267,
            left: 29,
            opacity: 0.8,
            transform: 'rotate(97deg)',
          },
          classes: ['red-dark'],
        },
        {
          name: 'Blatt',
          icon: faLeaf, // TODO: add class "leaf01"
          size: '3x',
          style: {
            top: 20,
            left: 290,
            opacity: 0.5,
            transform: 'rotate(140deg)',
          },
          classes: ['green', 'circle-shadow-light'],
        },
        {
          name: 'Schneepflug',
          icon: faSnowplow,
          size: '1x',
          style: {
            top: 160,
            left: 320,
            opacity: 0.7,
            transform: 'scale(-1, 1)',
          },
          classes: ['black'],
        },
        {
          name: 'Handschuh',
          icon: faMitten,
          size: '5x',
          style: {
            top: 290,
            left: 145,
            opacity: 0.25,
            transform: 'rotate(170deg)',
          },
          classes: ['black'],
        },
      ],
    };
  }
}
