import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentiBookComponent } from './commenti-book.component';

describe('CommentiBookComponent', () => {
  let component: CommentiBookComponent;
  let fixture: ComponentFixture<CommentiBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentiBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentiBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
