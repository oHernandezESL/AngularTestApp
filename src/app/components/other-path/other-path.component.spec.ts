import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPathComponent } from './other-path.component';

describe('OtherPathComponent', () => {
  let component: OtherPathComponent;
  let fixture: ComponentFixture<OtherPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
