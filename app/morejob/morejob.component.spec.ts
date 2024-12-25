import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorejobComponent } from './morejob.component';

describe('MorejobComponent', () => {
  let component: MorejobComponent;
  let fixture: ComponentFixture<MorejobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorejobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
