import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealSitioComponent } from './real-sitio.component';

describe('RealSitioComponent', () => {
  let component: RealSitioComponent;
  let fixture: ComponentFixture<RealSitioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealSitioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
