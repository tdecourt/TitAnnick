import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBateauHeadComponent } from './detail-bateau-head.component';

describe('DetailBateauHeadComponent', () => {
  let component: DetailBateauHeadComponent;
  let fixture: ComponentFixture<DetailBateauHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBateauHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBateauHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
