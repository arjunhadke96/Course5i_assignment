import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPaginationComponentComponent } from './top-pagination-component.component';

describe('TopPaginationComponentComponent', () => {
  let component: TopPaginationComponentComponent;
  let fixture: ComponentFixture<TopPaginationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPaginationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPaginationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
