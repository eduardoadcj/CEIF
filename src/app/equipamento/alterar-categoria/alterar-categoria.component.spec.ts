import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCategoriaComponent } from './alterar-categoria.component';

describe('AlterarCategoriaComponent', () => {
  let component: AlterarCategoriaComponent;
  let fixture: ComponentFixture<AlterarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarCategoriaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
