import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { GraphicComponent } from 'src/app/shared/graphic/graphic.component';
import { NavigationMenuComponent } from 'src/app/shared/navigation-menu/navigation-menu.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        GraphicComponent,
        NavigationMenuComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
      ],
      imports: [FormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('has home component', () => {
      expect(component).toBeTruthy();
    });
  });
});
