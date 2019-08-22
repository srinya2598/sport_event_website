import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedaltallyComponent } from './medaltally.component';

describe('MedaltallyComponent', () => {
  let component: MedaltallyComponent;
  let fixture: ComponentFixture<MedaltallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedaltallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedaltallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
