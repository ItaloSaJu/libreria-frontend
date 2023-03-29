import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisulizzatiRecenteComponent } from './visulizzati-recente.component';

describe('VisulizzatiRecenteComponent', () => {
  let component: VisulizzatiRecenteComponent;
  let fixture: ComponentFixture<VisulizzatiRecenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisulizzatiRecenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisulizzatiRecenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
