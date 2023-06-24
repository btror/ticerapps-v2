import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactForm', { static: false }) contactForm!: NgForm;
  submitted = false;

  ngAfterViewInit(): void {
    this.hideSubmitMessage();
  }

  onSubmit(data: { email: any; message: any; name: any }) {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.showSubmitErrorMessage();
      return;
    }

    const name = data.name;
    const email = data.email;
    const message = data.message;

    let emailBody = `Name: ${name}\n`;
    emailBody += `Email: ${email}\n`;
    emailBody += `Message: ${message}`;

    this.hideSubmitMessage();
    this.sendEmail('btrorapps@gmail.com', 'Contact Form Submission', emailBody);
    this.showSubmitSuccessMessage();

    const formValues = this.contactForm.value;
    this.contactForm.resetForm({ emitEvent: false });
    this.contactForm.form.patchValue(formValues);
  }

  sendEmail(to: string, subject: string, body: string): void {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  showSubmitErrorMessage(): void {
    const submitMessage = document.querySelector(
      '.submit-status-message'
    ) as HTMLElement;
    if (submitMessage) {
      submitMessage.style.display = 'block';
      submitMessage.style.color = '#dc3545';
      submitMessage.innerHTML =
        'Submission failed. Fill out all required fields properly.';
    }
  }

  showSubmitSuccessMessage(): void {
    const submitMessage = document.querySelector(
      '.submit-status-message'
    ) as HTMLElement;
    if (submitMessage) {
      submitMessage.style.display = 'block';
      submitMessage.style.color = '#008f18';
      submitMessage.innerHTML =
        'Message copied to mailing app. Send it from there.';
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
