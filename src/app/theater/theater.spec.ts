import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theater } from './theater';

describe('Theater', () => {
  let component: Theater;
  let fixture: ComponentFixture<Theater>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theater]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Theater);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
