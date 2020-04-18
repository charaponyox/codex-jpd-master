import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesUpdateComponent } from './entreprises-update.component';

describe('EntreprisesUpdateComponent', () => {
  let component: EntreprisesUpdateComponent;
  let fixture: ComponentFixture<EntreprisesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprisesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
