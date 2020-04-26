import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesEditComponent } from './entreprises-edit.component';

describe('EntreprisesEditComponent', () => {
  let component: EntreprisesEditComponent;
  let fixture: ComponentFixture<EntreprisesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprisesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
