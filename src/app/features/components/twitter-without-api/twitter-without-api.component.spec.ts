import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterWithoutAPIComponent } from './twitter-without-api.component';

describe('TwitterWithoutAPIComponent', () => {
  let component: TwitterWithoutAPIComponent;
  let fixture: ComponentFixture<TwitterWithoutAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterWithoutAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterWithoutAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
