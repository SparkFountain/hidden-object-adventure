import { Component, Input, OnInit } from '@angular/core';
import { CollectableObject } from '../interfaces/collectable-object.interface';
import { Scene } from '../interfaces/scene.interface';
import { NgStyle, Location } from '@angular/common';
import { ContainerComponent } from '../container/container';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScroll, faQuestionCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scene',
  imports: [NgStyle, ContainerComponent, FontAwesomeModule],
  templateUrl: './scene.html',
  styleUrl: './scene.scss',
})
export class SceneComponent implements OnInit {
  @Input('scene') scene!: Scene;
  words!: string[];
  wordOffset!: number;

  // FontAwesome icons
  faScroll = faScroll;
  faQuestionCircle = faQuestionCircle;
  faTrophy = faTrophy;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.words = [];
    this.wordOffset = 0;
    this.scene.objects?.forEach((obj: CollectableObject) => {
      this.words.push(obj.name);
    });
  }

  renderBackgroundUrl(): string {
    return `url('/assets/gfx/scenes/${this.scene.backgroundUrl}') no-repeat`;
  }

  renderStyle(obj: any): object {
    console.log('>>> renderClasses', obj);

    return {
      top: `${obj.style.top}px`,
      left: `${obj.style.left}px`,
      transform: obj.style.transform || 'none',
      opacity: obj.style.opacity || 1,
    };
  }

  renderClasses(obj: any): string {
    let result = '';
    obj.classes?.forEach((c: string) => (result += ` ${c}`));
    return result;
  }

  changedWord(offset: any): void {
    console.log('>>> offset', offset);

    this.wordOffset += offset;
  }

  back(): void {
    this.location.back();
  }

  help(): void {
    // in case of missing classes array, add it
    if (!this.scene.objects![this.wordOffset].classes) {
      this.scene.objects![this.wordOffset].classes = [];
    }

    // highlight active object
    this.scene.objects[this.wordOffset].classes!.push('animate__animated animate__flash');

    setTimeout(() => this.scene.objects[this.wordOffset].classes!.pop(), 1000);
  }

  collect(objectName: string): void {
    // check if correct object has been selected
    if (!(this.scene.objects[this.wordOffset].name === objectName)) {
      return;
    }

    // in case of missing classes array, add it
    if (!this.scene.objects[this.wordOffset].classes) {
      this.scene.objects[this.wordOffset].classes = [];
    }

    // highlight selected object
    this.scene.objects[this.wordOffset].classes!.push('animate__animated animate__heartBeat');

    setTimeout(() => {
      this.scene.objects.splice(this.wordOffset, 1);
      this.words.splice(this.wordOffset, 1);
      if (this.wordOffset > this.words.length - 1) {
        this.wordOffset--;
      }

      if (this.words.length === 0) {
        setTimeout(() => this.location.back(), 3000);
      }
    }, 1000);
  }
}
