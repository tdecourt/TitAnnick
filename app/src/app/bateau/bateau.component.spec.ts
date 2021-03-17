import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BateauComponent } from './bateau.component';

describe('BateauComponent', () => {
  let component: BateauComponent;
  let fixture: ComponentFixture<BateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BateauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
