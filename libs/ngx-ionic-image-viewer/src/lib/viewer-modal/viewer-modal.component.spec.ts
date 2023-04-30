import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewerModalComponent } from './viewer-modal.component';

describe('ViewerModalComponent', () => {
  let component: ViewerModalComponent;
  let fixture: ComponentFixture<ViewerModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
