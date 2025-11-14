import { Component, computed, Input, OnInit } from '@angular/core';
import { CollectableObject } from '../interfaces/collectable-object.interface';
import { Scene } from '../interfaces/scene.interface';
import { NgStyle, Location, NgClass } from '@angular/common';
import { ContainerComponent } from '../container/container';
import { signal } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScroll, faQuestionCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Decoration, DecoStyle } from '../interfaces/decoration.interface';

@Component({
  selector: 'app-scene',
  imports: [NgStyle, NgClass, ContainerComponent, FontAwesomeModule],
  templateUrl: './scene.html',
  styleUrl: './scene.scss',
})
export class SceneComponent implements OnInit {
  @Input({ required: true }) scene!: Scene;
  sceneSignal = signal<Scene>({
    name: '',
    backgroundUrl: '',
  });
  wordsSignal = signal<string[]>([]);
  wordOffset = 0;
  highlightSignal = signal<boolean>(false);

  // FontAwesome icons
  faScroll = faScroll;
  faQuestionCircle = faQuestionCircle;
  faTrophy = faTrophy;

  highlightClasses = computed(() => ({
    animate__animated: this.highlightSignal(),
    animate__flash: this.highlightSignal(),
  }));

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.sceneSignal.set(structuredClone(this.scene));

    this.sceneSignal().objects?.forEach((obj: CollectableObject) => {
      this.wordsSignal.update((words: string[]) => [...words, obj.name]);
    });
  }

  renderBackgroundUrl(): string {
    return `url('/assets/gfx/scenes/${this.sceneSignal().backgroundUrl}') no-repeat`;
  }

  renderStyle(obj: Decoration): DecoStyle {
    return {
      top: `${obj.style.top}px`,
      left: `${obj.style.left}px`,
      transform: obj.style.transform || 'none',
      opacity: obj.style.opacity || 1,
    };
  }

  renderClasses(obj: Decoration): string {
    let result = '';
    obj.classes?.forEach((c: string) => (result += ` ${c}`));
    return result;
  }

  changedWord(offset: number): void {
    this.wordOffset += offset;
  }

  back(): void {
    this.location.back();
  }

  help(): void {
    if (!this.sceneSignal().objects) return;

    // in case of missing classes array, add it
    if (!this.sceneSignal().objects![this.wordOffset].classes) {
      this.sceneSignal().objects![this.wordOffset].classes = [];
    }

    // highlight active object
    this.highlightSignal.set(false);
    // requestAnimationFrame(() => {
    //   this.highlightSignal.set(true);
    // });

    this.sceneSignal().objects![this.wordOffset].classes!.push('animate__animated animate__flash');

    setTimeout(() => this.sceneSignal().objects![this.wordOffset].classes!.pop(), 1000);
  }

  collect(objectName: string): void {
    if (!this.sceneSignal().objects) return;

    // check if correct object has been selected
    if (!(this.sceneSignal().objects![this.wordOffset].name === objectName)) {
      return;
    }

    // in case of missing classes array, add it
    if (!this.sceneSignal().objects![this.wordOffset].classes) {
      this.sceneSignal().objects![this.wordOffset].classes = [];
    }

    // highlight selected object
    this.sceneSignal().objects![this.wordOffset].classes!.push(
      'animate__animated animate__heartBeat'
    );

    setTimeout(() => {
      this.sceneSignal.update((scene: Scene) => ({
        ...scene,
        objects: this.removeAtIndex(scene.objects!, this.wordOffset),
      }));

      this.wordsSignal.update((words: string[]) => this.removeAtIndex(words, this.wordOffset));
      if (this.wordOffset > this.wordsSignal().length - 1) {
        this.wordOffset--;
      }

      if (this.wordsSignal().length === 0) {
        setTimeout(() => this.location.back(), 3000);
      }
    }, 1000);
  }

  private removeAtIndex<T>(arr: T[], index: number): T[] {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
}
