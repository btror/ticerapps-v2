import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

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

  it('should successfully submit form', () => {
    const formValue = {
      name: 'test name',
      email: 'test email',
      message: 'test message',
    };

    const sendEmailSpy = spyOn(component, 'sendEmail');

    const formElement = fixture.debugElement.query(
      By.css('form')
    ).nativeElement;
    component.contactForm.setValue(formValue);
    fixture.detectChanges();
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(sendEmailSpy).toHaveBeenCalledWith(
      'btrorapps@gmail.com',
      'Contact Form Submission',
      `Name: ${formValue.name}\nEmail: ${formValue.email}\nMessage: ${formValue.message}`
    );
  });
});
