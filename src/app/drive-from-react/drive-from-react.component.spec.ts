import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveFromReactComponent } from './drive-from-react.component';

describe('DriveFromReactComponent', () => {
  let component: DriveFromReactComponent;
  let fixture: ComponentFixture<DriveFromReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveFromReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveFromReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
