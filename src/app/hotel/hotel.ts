import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';
import { SceneComponent } from '../scene/scene';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGuitar,
  faSuitcase,
  faPassport,
  faLightbulb,
  faMobile,
  faGlasses,
  faPaperclip,
  faHighlighter,
  faSun,
  faHourglassEnd,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hotel',
  imports: [SceneComponent, FontAwesomeModule],
  templateUrl: './hotel.html',
  styleUrl: './hotel.scss',
})
export class HotelComponent implements OnInit {
  scene!: Scene;

  ngOnInit(): void {
    this.scene = {
      name: 'Hotel',
      backgroundUrl: 'hotel.jpg',
      objects: [
        {
          name: 'Gitarre',
          icon: faGuitar,
          size: '3x',
          style: {
            top: 124,
            left: 55,
            transform: 'rotate(300deg)',
            opacity: 0.8,
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Koffer',
          icon: faSuitcase,
          size: '3x',
          style: {
            top: 120,
            left: 275,
            transform: 'rotate(6deg)',
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Reisepass',
          icon: faPassport,
          size: '3x',
          style: {
            top: 386,
            left: 223,
            transform: 'rotate(5deg)',
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Glühbirne',
          icon: faLightbulb,
          size: '2x',
          style: {
            top: 400,
            left: 280,
            transform: 'rotate(10deg)',
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
        {
          name: 'Smartphone',
          icon: faMobile,
          size: '4x',
          style: {
            top: 230,
            left: 70,
            transform: 'rotate(36deg)',
            opacity: 0.4,
          },
          classes: ['circle-shadow-dark'],
        },
        {
          name: 'Brille',
          icon: faGlasses,
          size: '2x',
          style: {
            top: 277,
            left: 300,
            transform: 'rotate(17deg)',
            opacity: 0.66,
          },
          classes: ['red-dark'],
        },
        {
          name: 'Büroklammer',
          icon: faPaperclip,
          size: '1x',
          style: {
            top: 54,
            left: 88,
            transform: 'rotate(55deg)',
            opacity: 0.6,
          },
        },
        {
          name: 'Textmarker',
          icon: faHighlighter,
          size: '2x',
          style: {
            top: 335,
            left: 14,
            transform: 'rotate(65deg)',
          },
          classes: ['green-dark', 'circle-shadow-light'],
        },
        {
          name: 'Sonne',
          icon: faSun,
          size: '1x',
          style: {
            top: 430,
            left: 145,
            opacity: 0.66,
          },
          classes: ['grey'],
        },
        {
          name: 'Sanduhr',
          icon: faHourglassEnd,
          size: '1x',
          style: {
            top: 117,
            left: 157,
            opacity: 0.5,
          },
          classes: ['green'],
        },
      ],
    };
  }
}
