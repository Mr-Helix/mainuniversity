import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itemCardComponent } from './item-card.component';

describe('ItemCardComponent', () => {
  let component: itemCardComponent;
  let fixture: ComponentFixture<itemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [itemCardComponent]
    });
    fixture = TestBed.createComponent(itemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
