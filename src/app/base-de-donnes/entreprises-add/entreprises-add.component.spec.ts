import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesAddComponent } from './entreprises-add.component';

describe('EntreprisesAddComponent', () => {
  let component: EntreprisesAddComponent;
  let fixture: ComponentFixture<EntreprisesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprisesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
