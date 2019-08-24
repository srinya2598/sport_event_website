import { RegisterComponent } from './register.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterationController } from '../../../controller/registeration.controller';
import { MaterialModule } from '../../../../materal.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('Component: RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule],
      declarations: [RegisterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: RegisterationController,
          useValue: {
            register: jest.fn()
          }
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;

  });
  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
  it('das', () => {
    const spy = jest.spyOn(component, 'addSports');
    component.selectedSports = [];
    component.addSports('nai');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.selectedSports.length).toEqual(1);
  });

});
