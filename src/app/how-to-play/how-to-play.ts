import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-how-to-play',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './how-to-play.html',
  styleUrl: './how-to-play.scss',
})
export class HowToPlayComponent {
  // FontAwesome icons
  faScroll = faScroll;
}
