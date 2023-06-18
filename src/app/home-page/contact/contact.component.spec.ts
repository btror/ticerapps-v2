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

  describe('Initialization', () => {
    it('has contact component', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('Contact Form Submission', () => {
    it('should successfully copy contact form input to external mailing app', () => {
      const sendEmailSpy = spyOn(component, 'sendEmail');
      const formElement = fixture.debugElement.query(
        By.css('form')
      ).nativeElement;

      const formValue = {
        name: 'Test Name',
        email: 'testemail@gmail.com',
        message: 'test message',
      };
      component.contactForm.setValue(formValue);

      fixture.detectChanges();

      formElement.dispatchEvent(new CustomEvent('submit', {
        detail: formValue,
      }));

      fixture.detectChanges();

      expect(sendEmailSpy).toHaveBeenCalledWith(
        'btrorapps@gmail.com',
        'Contact Form Submission',
        `Name: ${formValue.name}\nEmail: ${formValue.email}\nMessage: ${formValue.message}`
      );
    });
  });

  describe('Contact Form Validation', () => {
    it('should show submission error message on invalid submit', () => {
      const sendEmailSpy = spyOn(component, 'sendEmail');
      const formElement = fixture.debugElement.query(
        By.css('form')
      ).nativeElement;

      const formValue = {
        name: 'Test Name',
        email: '',
        message: '',
      };
      component.contactForm.setValue(formValue);

      fixture.detectChanges();

      formElement.dispatchEvent(new CustomEvent('submit', {
        detail: formValue,
      }));

      fixture.detectChanges();

      const submitMessage = fixture.debugElement.query(
        By.css('.submit-status-message')
      ).nativeElement;

      expect(submitMessage.innerHTML).toContain(
        'Submission failed. Fill out all required fields properly.'
      );
      expect(sendEmailSpy).not.toHaveBeenCalled();
    });

    it('should show submission success message on valid submit', () => {
      const sendEmailSpy = spyOn(component, 'sendEmail');
      const formElement = fixture.debugElement.query(
        By.css('form')
      ).nativeElement;

      const formValue = {
        name: 'Test Name',
        email: 'testemail@gmail.com',
        message: 'test message',
      };
      component.contactForm.setValue(formValue);

      fixture.detectChanges();

      formElement.dispatchEvent(new CustomEvent('submit', {
        detail: formValue,
      }));

      fixture.detectChanges();

      const submitMessage = fixture.debugElement.query(
        By.css('.submit-status-message')
      ).nativeElement;

      expect(submitMessage.innerHTML).toContain(
        'Message copied to mailing app. Send it from there.'
      );
      expect(sendEmailSpy).toHaveBeenCalled();
    });
  });
});
