import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactForm', { static: false }) contactForm!: NgForm;

  ngAfterViewInit(): void {
    this.hideSubmitError();
  }

  onSubmit(data: { email: any; message: any; name: any }) {
    if (this.contactForm.invalid) {
      this.showSubmitError();
      return;
    }

    const name = data.name;
    const email = data.email;
    const message = data.message;

    let emailBody = `Name: ${name}\n`;
    emailBody += `Email: ${email}\n`;
    emailBody += `Message: ${message}`;

    this.hideSubmitError();

    this.sendEmail('btrorapps@gmail.com', 'Contact Form Submission', emailBody);

    this.contactForm.resetForm();
  }

  sendEmail(to: string, subject: string, body: string): void {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  showSubmitError(): void {
    const submitError = document.querySelector('.submit-error') as HTMLElement;
    if (submitError) {
      submitError.style.display = 'block';
    }
  }

  hideSubmitError(): void {
    const submitError = document.querySelector('.submit-error') as HTMLElement;
    if (submitError) {
      submitError.style.display = 'none';
    }
  }
}
