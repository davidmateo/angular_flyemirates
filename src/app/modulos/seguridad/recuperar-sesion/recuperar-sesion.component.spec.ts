import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarSesionComponent } from './recuperar-sesion.component';

describe('RecuperarSesionComponent', () => {
  let component: RecuperarSesionComponent;
  let fixture: ComponentFixture<RecuperarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
