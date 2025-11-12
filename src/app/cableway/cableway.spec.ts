import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cableway } from './cableway';

describe('Cableway', () => {
  let component: Cableway;
  let fixture: ComponentFixture<Cableway>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cableway]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cableway);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
