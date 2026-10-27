import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Plantillafuncionsimplecomponent } from './plantillafuncionsimplecomponent';

describe('Plantillafuncionsimplecomponent', () => {
  let component: Plantillafuncionsimplecomponent;
  let fixture: ComponentFixture<Plantillafuncionsimplecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Plantillafuncionsimplecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Plantillafuncionsimplecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
