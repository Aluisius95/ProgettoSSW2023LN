import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingComponent } from './lending.component';

describe('LendingComponent', () => {
  let component: LendingComponent;
  let fixture: ComponentFixture<LendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LendingComponent]
    });
    fixture = TestBed.createComponent(LendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
