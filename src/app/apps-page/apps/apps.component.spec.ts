import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsComponent } from './apps.component';
import { GraphicComponent } from 'src/app/shared/graphic/graphic.component';
import { NavigationMenuComponent } from 'src/app/shared/navigation-menu/navigation-menu.component';

describe('AppsComponent', () => {
  let component: AppsComponent;
  let fixture: ComponentFixture<AppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppsComponent, GraphicComponent, NavigationMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
