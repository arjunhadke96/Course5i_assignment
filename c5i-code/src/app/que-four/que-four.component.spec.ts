import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueFourComponent } from './que-four.component';

describe('QueFourComponent', () => {
  let component: QueFourComponent;
  let fixture: ComponentFixture<QueFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
