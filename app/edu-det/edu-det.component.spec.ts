import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduDetComponent } from './edu-det.component';

describe('EduDetComponent', () => {
  let component: EduDetComponent;
  let fixture: ComponentFixture<EduDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
