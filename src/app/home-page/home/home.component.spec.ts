import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { GraphicComponent } from 'src/app/shared/graphic/graphic.component';
import { NavigationMenuComponent } from 'src/app/shared/navigation-menu/navigation-menu.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

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
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });
});
