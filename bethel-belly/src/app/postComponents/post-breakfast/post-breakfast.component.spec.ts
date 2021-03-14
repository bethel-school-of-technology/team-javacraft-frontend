import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBreakfastComponent } from './post-breakfast.component';

describe('PostBreakfastComponent', () => {
  let component: PostBreakfastComponent;
  let fixture: ComponentFixture<PostBreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBreakfastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
