import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMenuComponent } from './navigation-menu.component';

describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationMenuComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navigation-menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to section on home navigation click', () => {
    spyOn(component, 'scroll');
    const link = fixture.nativeElement.querySelector('a[routerLink="/"]');
    link.click();
    expect(component.scroll).toHaveBeenCalledWith('home');
  });
});
