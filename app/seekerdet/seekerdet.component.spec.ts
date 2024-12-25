import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerdetComponent } from './seekerdet.component';

describe('SeekerdetComponent', () => {
  let component: SeekerdetComponent;
  let fixture: ComponentFixture<SeekerdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekerdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekerdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
