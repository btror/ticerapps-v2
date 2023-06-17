import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contact component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should submit form', () => {
    const form = {
      value: {
        name: 'test name',
        email: 'test email',
        message: 'test message',
      },
      resetForm: () => {},
    };

    const event = {
      preventDefault: () => {},
    };
    const sendEmailSpy = spyOn(component, 'sendEmail');

    component.onSubmit(form as any, event as any);
    expect(sendEmailSpy).toHaveBeenCalled();
  });
});
