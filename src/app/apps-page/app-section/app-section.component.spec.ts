import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSectionComponent } from './app-section.component';

describe('AppSectionComponent', () => {
  let component: AppSectionComponent;
  let fixture: ComponentFixture<AppSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('has app-section component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('App Downloads', () => {
    it('should open link in new tab', () => {
      const openSpy = spyOn(window, 'open');
      const link = 'https://example.com';

      component.link = link;
      component.openLink();

      expect(openSpy).toHaveBeenCalledWith(link, '_blank');
    });
  });
});
