import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetWorksComponent } from './net-works.component';

describe('NetWorksComponent', () => {
  let component: NetWorksComponent;
  let fixture: ComponentFixture<NetWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
