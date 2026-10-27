import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Plantillafuncionmultiplecomponent } from './plantillafuncionmultiplecomponent';

describe('Plantillafuncionmultiplecomponent', () => {
  let component: Plantillafuncionmultiplecomponent;
  let fixture: ComponentFixture<Plantillafuncionmultiplecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Plantillafuncionmultiplecomponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Plantillafuncionmultiplecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
