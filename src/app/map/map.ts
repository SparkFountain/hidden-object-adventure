import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChurch,
  faTree,
  faIgloo,
  faPaw,
  faSkating,
  faTram,
  faTheaterMasks,
  faGlassCheers,
  faSwimmer,
  faHotel,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './map.html',
  styleUrl: './map.scss',
})
export class MapComponent {
  // FontAwesome icons
  faChurch = faChurch;
  faTree = faTree;
  faIgloo = faIgloo;
  faPaw = faPaw;
  faSkating = faSkating;
  faTram = faTram;
  faTheaterMasks = faTheaterMasks;
  faGlassCheers = faGlassCheers;
  faSwimmer = faSwimmer;
  faHotel = faHotel;
}
