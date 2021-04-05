import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotteComponent } from './flotte.component';

describe('FlotteComponent', () => {
  let component: FlotteComponent;
  let fixture: ComponentFixture<FlotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
