import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAirFreshener,
  faPlane,
  faBolt,
  faWalking,
  faArchway,
  faBone,
  faBandAid,
  faHatWizard,
  faStore,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ice-skating',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './ice-skating.html',
  styleUrl: './ice-skating.scss',
})
export class IceSkatingComponent implements OnInit {
  scene!: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Eislaufen',
      backgroundUrl: 'ice-skating.jpg',
      objects: [
        {
          name: 'Duftbäumchen',
          icon: faAirFreshener,
          size: '4x',
          style: {
            top: 173,
            left: 155,
            opacity: 0.75,
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Flugzeug',
          icon: faPlane,
          size: '3x',
          style: {
            top: 10,
            left: 150,
            opacity: 1,
          },
          classes: ['white', 'circle-shadow-light'],
        },
        {
          name: 'Blitz',
          icon: faBolt,
          size: '1x',
          style: {
            top: 428,
            left: 103,
            transform: 'scale(-1,1) rotate(45deg)',
          },
          classes: ['grey'],
        },
        {
          name: 'Spaziergänger',
          icon: faWalking,
          size: '2x',
          style: {
            top: 203,
            left: 320,
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Torbogen',
          icon: faArchway,
          size: '1x',
          style: {
            top: 46,
            left: 64,
          },
          classes: ['green'],
        },
        {
          name: 'Knochen',
          icon: faBone,
          size: '4x',
          style: {
            top: 380,
            left: 180,
            transform: 'rotate(70deg)',
            opacity: 0.5,
          },
        },
        {
          name: 'Pflaster',
          icon: faBandAid,
          size: '1x',
          style: {
            top: 150,
            left: 287,
            transform: 'rotate(90deg)',
            opacity: 0.8,
          },
          classes: ['red', 'circle-shadow-light'],
        },
        {
          name: 'Zauberhut',
          icon: faHatWizard,
          size: '2x',
          style: {
            top: 186,
            left: 261,
            transform: 'scale(-1,1) rotate(15deg)',
          },
          classes: ['green-dark', 'circle-shadow-light'],
        },
        {
          name: 'Kiosk',
          icon: faStore,
          size: '2x',
          style: {
            top: 210,
            left: 50,
            transform: 'rotate(-4deg)',
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
        {
          name: 'Tasche',
          icon: faShoppingBag,
          size: '2x',
          style: {
            top: 228,
            left: 25,
            transform: 'rotate(-30deg)',
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
      ],
    };
  }
}
