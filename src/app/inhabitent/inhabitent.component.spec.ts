import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabitentComponent } from './inhabitent.component';

describe('InhabitentComponent', () => {
  let component: InhabitentComponent;
  let fixture: ComponentFixture<InhabitentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabitentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabitentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
