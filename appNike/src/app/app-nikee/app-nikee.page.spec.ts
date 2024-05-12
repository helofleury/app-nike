import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppNikeePage } from './app-nikee.page';

describe('AppNikeePage', () => {
  let component: AppNikeePage;
  let fixture: ComponentFixture<AppNikeePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNikeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
