import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoloComponent } from './catagolo.component';

describe('CatagoloComponent', () => {
  let component: CatagoloComponent;
  let fixture: ComponentFixture<CatagoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
