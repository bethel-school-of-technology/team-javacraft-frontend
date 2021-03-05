import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TannerComponent } from './tanner.component';

describe('TannerComponent', () => {
  let component: TannerComponent;
  let fixture: ComponentFixture<TannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
