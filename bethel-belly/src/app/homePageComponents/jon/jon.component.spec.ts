import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonComponent } from './jon.component';

describe('JonComponent', () => {
  let component: JonComponent;
  let fixture: ComponentFixture<JonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
