import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMergeComponent } from './hire-merge.component';

describe('HireMergeComponent', () => {
  let component: HireMergeComponent;
  let fixture: ComponentFixture<HireMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireMergeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
