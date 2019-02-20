import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceshomeComponent } from './serviceshome.component';

describe('ServiceshomeComponent', () => {
  let component: ServiceshomeComponent;
  let fixture: ComponentFixture<ServiceshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
