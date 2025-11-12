import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forest } from './forest';

describe('Forest', () => {
  let component: Forest;
  let fixture: ComponentFixture<Forest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
