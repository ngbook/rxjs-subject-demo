import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectErrorComponent } from './subject-error.component';

describe('SubjectErrorComponent', () => {
  let component: SubjectErrorComponent;
  let fixture: ComponentFixture<SubjectErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
