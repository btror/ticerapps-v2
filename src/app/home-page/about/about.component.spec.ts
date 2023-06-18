import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  describe('Initialization', () => {
    it('has about component', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('Asset Loading Enhancements', () => {
    it('should lazy load about section graphic on initialization', fakeAsync(() => {
      spyOn(component, 'lazyLoadImage');

      fixture.detectChanges();
      tick();

      expect(component.lazyLoadImage).toHaveBeenCalled();
    }));
  });
});
