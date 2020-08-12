import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NttDropdownComponent } from './ntt-dropdown.component';

describe('NttDropdownComponent', () => {
  let component: NttDropdownComponent;
  let fixture: ComponentFixture<NttDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NttDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NttDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
