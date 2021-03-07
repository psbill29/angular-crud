import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuserbynameComponent } from './deleteuserbyname.component';

describe('DeleteuserbynameComponent', () => {
  let component: DeleteuserbynameComponent;
  let fixture: ComponentFixture<DeleteuserbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteuserbynameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteuserbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
