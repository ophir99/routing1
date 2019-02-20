import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledevComponent } from './mobiledev.component';

describe('MobiledevComponent', () => {
  let component: MobiledevComponent;
  let fixture: ComponentFixture<MobiledevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
