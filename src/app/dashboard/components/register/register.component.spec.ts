import {RegisterComponent} from './register.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('Component: RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [RegisterComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
      fixture = TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;

    });
    it('should have a defined component', () => {
      expect(component).toBeDefined();
    });
  });
