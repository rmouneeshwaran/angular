import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireRegisterComponent } from './hire-register.component';

describe('HireRegisterComponent', () => {
  let component: HireRegisterComponent;
  let fixture: ComponentFixture<HireRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
