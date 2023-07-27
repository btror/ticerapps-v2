import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactForm', { static: false }) contactForm!: NgForm;
  submitted = false;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.hideSubmitMessage();
  }

  onSubmit(data: { email: any; message: any; name: any }) {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.showSubmitErrorMessage(
        'Submission failed. Fill out all required fields properly.'
      );
      return;
    }

    const name = data.name;
    const email = data.email;
    const message = data.message;

    let emailBody = `Name: ${name}\n`;
    emailBody += `Email: ${email}\n`;
    emailBody += `Message: ${message}`;

    this.hideSubmitMessage();

    const request = {
      sender_email: email,
      message_body:
        'From: ' +
        name +
        '\n' +
        'Email: ' +
        email +
        '\n' +
        'Message: ' +
        message,
    };

    this.http.post<any>(environment.apiUrl, request).subscribe(
      (response) => {
        if (response.message) {
          this.showSubmitSuccessMessage(
            'Message sent. Thank you for contacting me!'
          );
        } else if (response.error) {
          this.showSubmitErrorMessage(
            'Submission failed, could not contact server. Message copied to mailing app. Send it from there.'
          );
          this.openEmailApp(emailBody);
        }
      },
      (error) => {
        console.log(error);
        this.showSubmitErrorMessage(
          'Submission failed, could not contact server. Message copied to mailing app. Send it from there.'
        );
        this.openEmailApp(emailBody);
      }
    );
  }

  openEmailApp(emailBody: string): void {
    this.sendEmail('btrorapps@gmail.com', 'Contact Form Submission', emailBody);

    const formValues = this.contactForm.value;
    this.contactForm.resetForm({ emitEvent: false });
    this.contactForm.form.patchValue(formValues);
  }

  sendEmail(to: string, subject: string, body: string): void {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  showSubmitErrorMessage(message: string): void {
    const submitMessage = document.querySelector(
      '.submit-status-message'
    ) as HTMLElement;
    if (submitMessage) {
      submitMessage.style.display = 'block';
      submitMessage.style.color = '#dc3545';
      submitMessage.innerHTML = message;
    }
  }

  showSubmitSuccessMessage(message: string): void {
    const submitMessage = document.querySelector(
      '.submit-status-message'
    ) as HTMLElement;
    if (submitMessage) {
      submitMessage.style.display = 'block';
      submitMessage.style.color = '#008f18';
      submitMessage.innerHTML = message;
    }
  }

  hideSubmitMessage(): void {
    const submitMessage = document.querySelector(
      '.submit-status-message'
    ) as HTMLElement;
    if (submitMessage) {
      submitMessage.style.display = 'none';
    }
  }
}
