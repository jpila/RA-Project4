import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStuffComponent } from './shop-stuff.component';

describe('ShopStuffComponent', () => {
  let component: ShopStuffComponent;
  let fixture: ComponentFixture<ShopStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
