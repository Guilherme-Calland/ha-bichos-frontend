import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAbrigosComponent } from './lista-de-abrigos.component';

describe('ListaDeAbrigosComponent', () => {
  let component: ListaDeAbrigosComponent;
  let fixture: ComponentFixture<ListaDeAbrigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeAbrigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAbrigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
