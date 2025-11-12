import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPaintRoller,
  faTemperatureLow,
  faTruck,
  faGhost,
  faCrosshairs,
  faDraftingCompass,
  faHiking,
  faPoop,
  faSocks,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forest',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './forest.html',
  styleUrl: './forest.scss',
})
export class ForestComponent implements OnInit {
  scene!: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Wald',
      backgroundUrl: 'forest.jpg',
      objects: [
        {
          name: 'Malerrolle',
          icon: faPaintRoller,
          size: '5x',
          style: {
            top: 274,
            left: 155,
            transform: 'rotate(-2deg)',
            opacity: 0.66,
          },
          classes: ['green'],
        },
        {
          name: 'Thermometer',
          icon: faTemperatureLow,
          size: '1x',
          style: {
            top: 180,
            left: 60,
            opacity: 0.75,
          },
        },
        {
          name: 'LKW',
          icon: faTruck,
          size: '1x',
          style: {
            top: 440,
            left: 130,
            transform: 'rotate(-15deg)',
          },
          classes: ['black'],
        },
        {
          name: 'Gespenst',
          icon: faGhost,
          size: '3x',
          style: {
            top: 120,
            left: 310,
            transform: 'rotate(-35deg)',
            opacity: 0.75,
          },
          classes: ['green-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Fadenkreuz',
          icon: faCrosshairs,
          size: '5x',
          style: {
            top: 10,
            left: 50,
            opacity: 0.2,
          },
          classes: ['grey', 'circle-shadow-light'],
        },
        {
          name: 'Zirkel',
          icon: faDraftingCompass,
          size: '3x',
          style: {
            top: 326,
            left: 99,
            transform: 'rotate(7deg)',
          },
          classes: ['red'],
        },
        {
          name: 'Wanderer',
          icon: faHiking,
          size: '1x',
          style: {
            top: 127,
            left: 20,
          },
          classes: ['black'],
        },
        {
          name: 'Exkrement',
          icon: faPoop,
          size: '2x',
          style: {
            top: 350,
            left: 261,
            opacity: 0.8,
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Socken',
          icon: faSocks,
          size: '5x',
          style: {
            top: 30,
            left: 190,
            transform: 'rotate(25deg)',
            opacity: 0.66,
          },
          classes: ['grey'],
        },
        {
          name: 'Kaffeetasse',
          icon: faCoffee,
          size: '1x',
          style: {
            top: 234,
            left: 36,
            transform: 'rotate(-35deg)',
          },
          classes: ['green', 'circle-shadow-light'],
        },
      ],
    };
  }
}
