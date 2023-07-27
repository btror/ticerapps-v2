import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ContactComponent } from './contact.component';
import { environment } from '../../../environments/environment';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('has contact component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Send Messages Without ticerapps-backend API Call', () => {
    it('should copy contact form input to external mailing app', fakeAsync(() => {
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

      formElement.dispatchEvent(
        new CustomEvent('submit', {
          detail: formValue,
        })
      );

      fixture.detectChanges();
      tick();

      const mockErrorResponse = { error: true };
      httpMock.expectOne(environment.apiUrl).flush(mockErrorResponse);

      fixture.detectChanges();

      expect(sendEmailSpy).toHaveBeenCalledWith(
        'btrorapps@gmail.com',
        'Contact Form Submission',
        `Name: ${formValue.name}\nEmail: ${formValue.email}\nMessage: ${formValue.message}`
      );
    }));

    it('should show submission success message on valid form submission', fakeAsync(() => {
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

      formElement.dispatchEvent(
        new CustomEvent('submit', {
          detail: formValue,
        })
      );

      fixture.detectChanges();
      tick();

      const mockErrorResponse = { error: true };
      httpMock.expectOne(environment.apiUrl).flush(mockErrorResponse);

      fixture.detectChanges();

      const submitMessage = fixture.debugElement.query(
        By.css('.submit-status-message')
      ).nativeElement;

      expect(submitMessage.innerHTML).toContain(
        'Message copied to mailing app. Send it from there.'
      );
      expect(sendEmailSpy).toHaveBeenCalled();
    }));

    it('should show submission error message on invalid form submission', () => {
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

      formElement.dispatchEvent(
        new CustomEvent('submit', {
          detail: formValue,
        })
      );

      fixture.detectChanges();

      const submitMessage = fixture.debugElement.query(
        By.css('.submit-status-message')
      ).nativeElement;

      expect(submitMessage.innerHTML).toContain(
        'Submission failed. Fill out all required fields properly.'
      );
      expect(sendEmailSpy).not.toHaveBeenCalled();
    });
  });
});
