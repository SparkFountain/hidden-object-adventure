import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Igloo } from './igloo';

describe('Igloo', () => {
  let component: Igloo;
  let fixture: ComponentFixture<Igloo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Igloo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Igloo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
