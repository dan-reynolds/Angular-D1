import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDevComponent } from './test-dev.component';

describe('TestDevComponent', () => {
  let component: TestDevComponent;
  let fixture: ComponentFixture<TestDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
