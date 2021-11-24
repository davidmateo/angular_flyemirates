import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarSesionComponent } from './cambiar-sesion.component';

describe('CambiarSesionComponent', () => {
  let component: CambiarSesionComponent;
  let fixture: ComponentFixture<CambiarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
