import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridbasicsComponent } from './gridbasics.component';

describe('GridbasicsComponent', () => {
  let component: GridbasicsComponent;
  let fixture: ComponentFixture<GridbasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridbasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
