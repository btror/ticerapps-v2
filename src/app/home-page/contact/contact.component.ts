import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name!: string;
  email!: string;
  message!: string;

  onSubmit(form: NgForm, event: Event): void {
    event.preventDefault();

    const name = form.value.name;
    const email = form.value.email;
    const message = form.value.message;

    let emailBody = `Name: ${name}\n`;
    emailBody += `Email: ${email}\n`;
    emailBody += `Message: ${message}`;

    this.sendEmail('btrorapps@gmail.com', 'Contact Form Submission', emailBody);

    form.resetForm();
  }

  sendEmail(to: string, subject: string, body: string): void {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
}
