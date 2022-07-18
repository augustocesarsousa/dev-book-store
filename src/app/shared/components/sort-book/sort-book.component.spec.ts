import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBookComponent } from './sort-book.component';

describe('SortBookComponent', () => {
  let component: SortBookComponent;
  let fixture: ComponentFixture<SortBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
