import { NgStyle } from '@angular/common';
import { afterNextRender, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container',
  imports: [NgStyle, FontAwesomeModule],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class ContainerComponent implements OnInit {
  @Input('words') words!: string[];
  @Input('wordOffset') wordOffset!: number;
  @Output('changedWord') changedWord: EventEmitter<number>;

  // FontAwesome icons
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor() {
    this.changedWord = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.wordOffset = 0;
  }

  moveWords(direction: 'left' | 'right'): void {
    if (direction === 'left' && this.wordOffset > 0) {
      this.changedWord.emit(-1);
    } else if (direction === 'right' && this.wordOffset < this.words.length - 1) {
      this.changedWord.emit(1);
    }
  }
}
afterNextRender;
