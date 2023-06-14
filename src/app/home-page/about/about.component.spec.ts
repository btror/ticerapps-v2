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

  it('should create about component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call lazyLoadImage on initialization', fakeAsync(() => {
    spyOn(component, 'lazyLoadImage');

    fixture.detectChanges();
    tick();

    expect(component.lazyLoadImage).toHaveBeenCalled();
  }));
});
