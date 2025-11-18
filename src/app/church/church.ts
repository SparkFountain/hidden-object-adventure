import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPray,
  faBible,
  faMosque,
  faStarAndCrescent,
  faEye,
  faMenorah,
  faMagic,
  faBaby,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

import { faItunesNote } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-church',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './church.html',
  styleUrl: './church.scss',
})
export class ChurchComponent implements OnInit {
  scene!: Scene;
  words!: string[];

  ngOnInit(): void {
    this.words = [];

    this.scene = {
      name: 'Kirche',
      backgroundUrl: 'church.jpg',
      objects: [
        {
          name: 'Betende Person',
          icon: faPray,
          size: '2x',
          style: {
            top: 410,
            left: 120,
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Bibel',
          icon: faBible,
          size: '1x',
          style: {
            top: 157,
            left: 185,
          },
          classes: ['white', 'circle-shadow-dark'],
        },
        {
          name: 'Moschee',
          icon: faMosque,
          size: '3x',
          style: {
            top: 339,
            left: 177,
            opacity: 0.8,
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
        {
          name: 'Halbmond mit Stern',
          icon: faStarAndCrescent,
          size: '2x',
          style: {
            top: 350,
            left: 22,
            opacity: 0.5,
          },
          classes: ['green-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Auge',
          icon: faEye,
          size: '1x',
          style: {
            top: 17,
            left: 206,
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Achtelnoten',
          icon: faItunesNote,
          size: '1x',
          style: {
            top: 220,
            left: 239,
          },
          classes: ['red', 'circle-shadow-dark'],
        },
        {
          name: 'Kerzenständer',
          icon: faMenorah,
          size: '2x',
          style: {
            top: 262,
            left: 51,
            opacity: 0.65,
          },
          classes: ['grey'],
        },
        {
          name: 'Zauberstab',
          icon: faMagic,
          size: '2x',
          style: {
            top: 215,
            left: 282,
            opacity: 0.5,
            transform: 'rotate(-35deg)',
          },
          classes: ['grey'],
        },
        {
          name: 'Baby',
          icon: faBaby,
          size: '3x',
          style: {
            top: 227,
            left: 200,
            opacity: 0.85,
            transform: 'rotate(80deg)',
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Glocke',
          icon: faBell,
          size: '1x',
          style: {
            top: 105,
            left: 28,
          },
          classes: ['green-dark'],
        },
      ],
    };
  }
}
