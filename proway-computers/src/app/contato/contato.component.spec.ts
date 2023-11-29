import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contatoComponent } from './contato.component';

describe('ContatoComponent', () => {
  let component: contatoComponent;
  let fixture: ComponentFixture<contatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ contatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(contatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
