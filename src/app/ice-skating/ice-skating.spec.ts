import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceSkating } from './ice-skating';

describe('IceSkating', () => {
  let component: IceSkating;
  let fixture: ComponentFixture<IceSkating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IceSkating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceSkating);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
