import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeVehiculoComponent } from './tipo-de-vehiculo.component';

describe('TipoDeVehiculoComponent', () => {
  let component: TipoDeVehiculoComponent;
  let fixture: ComponentFixture<TipoDeVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
