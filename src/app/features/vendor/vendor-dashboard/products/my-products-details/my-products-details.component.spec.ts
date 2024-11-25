import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsDetailsComponent } from './my-products-details.component';

describe('MyProductsDetailsComponent', () => {
  let component: MyProductsDetailsComponent;
  let fixture: ComponentFixture<MyProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyProductsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
