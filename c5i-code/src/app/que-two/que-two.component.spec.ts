import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueTwoComponent } from './que-two.component';

describe('QueTwoComponent', () => {
  let component: QueTwoComponent;
  let fixture: ComponentFixture<QueTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
