import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTableauxComponent } from './list-tableaux.component';

describe('ListTableauxComponent', () => {
  let component: ListTableauxComponent;
  let fixture: ComponentFixture<ListTableauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTableauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
