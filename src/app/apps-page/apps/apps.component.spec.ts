import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppsComponent } from './apps.component';
import { GraphicComponent } from 'src/app/shared/graphic/graphic.component';
import { NavigationMenuComponent } from 'src/app/shared/navigation-menu/navigation-menu.component';
import { AppSectionComponent } from '../app-section/app-section.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

describe('AppsComponent', () => {
  let component: AppsComponent;
  let fixture: ComponentFixture<AppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppsComponent,
        GraphicComponent,
        NavigationMenuComponent,
        AppSectionComponent,
        FooterComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create apps component', () => {
    expect(component).toBeTruthy();
  });

  it('should sort apps by title', () => {
    component.sortByTitle();
    const sortedApps = component.appSections.map((section) => section.title);
    const expectedApps = [
      "Adam's method",
      'Apportionment calculator',
      'Apportionment calculator free',
      'Apportionment calculator pro',
      'Apportionment methods',
      "Hamilton's method",
      "Jefferson's method",
      'Length unit converter',
      "Webster's method",
    ];
    expect(sortedApps).toEqual(expectedApps);
  });

  it('should sort apps by platform', () => {
    component.sortByPlatform();
    const sortedApps = component.appSections.map((section) => section.title);
    const expectedApps = [
      'Apportionment calculator',
      'Apportionment calculator free',
      'Apportionment calculator pro',
      'Length unit converter',
      "Adam's method",
      'Apportionment methods',
      "Hamilton's method",
      "Jefferson's method",
      "Webster's method",
    ];
    expect(sortedApps).toEqual(expectedApps);
  });

  it('should sort apps by price low to high', () => {
    component.sortByPriceLowToHigh();
    const sortedApps = component.appSections.map((section) => section.title);
    const expectedApps = [
      'Apportionment calculator',
      'Apportionment calculator free',
      'Length unit converter',
      "Adam's method",
      'Apportionment calculator pro',
      "Hamilton's method",
      "Jefferson's method",
      "Webster's method",
      'Apportionment methods',
    ];
    expect(sortedApps).toEqual(expectedApps);
  });

  it('should sort apps by price high to low', () => {
    component.sortByPriceHighToLow();
    const sortedApps = component.appSections.map((section) => section.title);
    const expectedApps = [
      'Apportionment methods',
      "Adam's method",
      'Apportionment calculator pro',
      "Hamilton's method",
      "Jefferson's method",
      "Webster's method",
      'Apportionment calculator',
      'Apportionment calculator free',
      'Length unit converter',
    ];
    expect(sortedApps).toEqual(expectedApps);
  });
});
