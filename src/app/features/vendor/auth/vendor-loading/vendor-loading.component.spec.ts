import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLoadingComponent } from './vendor-loading.component';

describe('VendorLoadingComponent', () => {
  let component: VendorLoadingComponent;
  let fixture: ComponentFixture<VendorLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
