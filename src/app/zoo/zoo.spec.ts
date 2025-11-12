import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zoo } from './zoo';

describe('Zoo', () => {
  let component: Zoo;
  let fixture: ComponentFixture<Zoo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zoo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zoo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
