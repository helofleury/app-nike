import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppNikePage } from './app-nike.page';

describe('AppNikePage', () => {
  let component: AppNikePage;
  let fixture: ComponentFixture<AppNikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
