import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneUpateComponent } from './personne-upate.component';

describe('PersonneUpateComponent', () => {
  let component: PersonneUpateComponent;
  let fixture: ComponentFixture<PersonneUpateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneUpateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneUpateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
