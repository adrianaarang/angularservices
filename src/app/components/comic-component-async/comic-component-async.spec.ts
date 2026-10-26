import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicComponentAsync } from './comic-component-async';

describe('ComicComponentAsync', () => {
  let component: ComicComponentAsync;
  let fixture: ComponentFixture<ComicComponentAsync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicComponentAsync],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicComponentAsync);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
