import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredetComponent } from './hiredet.component';

describe('HiredetComponent', () => {
  let component: HiredetComponent;
  let fixture: ComponentFixture<HiredetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiredetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
