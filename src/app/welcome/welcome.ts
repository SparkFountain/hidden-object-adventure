import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlayCircle,
  faHome,
  faCloud,
  faSun,
  faCarSide,
  faTruckMonster,
  faHiking,
  faHorse,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  imports: [SceneComponent, RouterModule, FontAwesomeModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class WelcomeComponent implements OnInit {
  scene!: Scene;

  // FontAwesome icons
  faPlayCircle = faPlayCircle;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Willkommen',
      backgroundUrl: 'welcome.jpg',
      decoration: [
        {
          icon: faHome,
          size: '2x',
          style: {
            top: 396,
            left: 70,
            transform: 'rotate(-10deg)',
          },
          classes: ['black'],
        },
        {
          icon: faHome,
          size: '2x',
          style: {
            top: 392,
            left: 120,
            transform: 'rotate(-1deg) scale(-1,1)',
          },
          classes: ['red-dark'],
        },
        {
          icon: faHome,
          size: '2x',
          style: {
            top: 394,
            left: 170,
            transform: 'rotate(4deg)',
          },
          classes: ['green-dark'],
        },
        {
          icon: faCloud,
          size: '3x',
          style: {
            top: 103,
            left: 45,
            opacity: 0.75,
          },
          classes: ['white'],
        },
        {
          icon: faCloud,
          size: '2x',
          style: {
            top: 103,
            left: 205,
            opacity: 0.75,
          },
          classes: ['white'],
        },
        {
          icon: faCloud,
          size: '4x',
          style: {
            top: 103,
            left: 273,
            opacity: 0.75,
          },
          classes: ['white'],
        },
        {
          icon: faSun,
          size: '3x',
          style: {
            top: 103,
            left: 128,
            opacity: 0.5,
          },
          classes: ['red'],
        },
        {
          icon: faCarSide,
          size: '1x',
          style: {
            top: 473,
            left: 28,
          },
          classes: ['black'],
        },
        {
          icon: faTruckMonster,
          size: '1x',
          style: {
            top: 423,
            left: 277,
            transform: 'scale(-1,1) rotate(-8deg)',
          },
          classes: ['black'],
        },
        {
          icon: faHiking,
          size: '1x',
          style: {
            top: 250,
            left: 10,
          },
          classes: ['black'],
        },
        {
          icon: faHorse,
          size: '1x',
          style: {
            top: 350,
            left: 250,
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
        {
          icon: faHorse,
          size: '1x',
          style: {
            top: 330,
            left: 230,
            transform: 'scale(-1,1)',
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
      ],
    };
  }
}
