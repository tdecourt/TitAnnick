import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BateauDetailComponent } from './bateau-detail.component';

describe('BateauDetailComponent', () => {
  let component: BateauDetailComponent;
  let fixture: ComponentFixture<BateauDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BateauDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BateauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
