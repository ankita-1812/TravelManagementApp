import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReqStatusComponent } from './update-req-status.component';

describe('UpdateReqStatusComponent', () => {
  let component: UpdateReqStatusComponent;
  let fixture: ComponentFixture<UpdateReqStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReqStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReqStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
