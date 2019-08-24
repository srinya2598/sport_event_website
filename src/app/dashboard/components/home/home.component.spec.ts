import {HomeComponent} from './home.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '../../../../materal.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

describe('Component: HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dialog: MatDialog;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jest.fn()
          }
        },
        {
          provide: MatDialog,
          useValue: {
            open: jest.fn()
          }
        }
      ],
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    dialog = TestBed.get(MatDialog);
    router = TestBed.get(Router);
    component = fixture.componentInstance;

  });
  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  describe('facebook', () => {
    it('should navigate to correct route', () => {
      const facebookSpy = jest.spyOn(component, 'facebook');
      component.facebook();
      expect(router.navigate).toHaveBeenCalledTimes(1);
    });

  });
  describe('medalTally', () => {
    it('should open a matDialog', () => {
      const medalTallySpy = jest.spyOn(component, 'medalTally');
      component.medalTally();
      expect(dialog.open).toHaveBeenCalledTimes(1);
    });
  });
});
