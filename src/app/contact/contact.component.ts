import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(form: NgForm, event: Event): void {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = form.value.name;
    const email = form.value.email;
    const message = form.value.message;
    console.log(name);
    console.log(email);
    console.log(message);

    // Compose the email message
    let emailBody = `Name: ${name}\n`;
    emailBody += `Email: ${email}\n`;
    emailBody += `Message: ${message}`;

    // Send the email using a service or API
    // Replace the following line with your email sending logic
    this.sendEmail('your-email@example.com', 'Contact Form Submission', emailBody);

    // Reset the form after submission
    form.resetForm();
  }

  sendEmail(to: string, subject: string, body: string): void {
    // Implement your email sending logic here
    // You can use an email service or API to send the email
    // For example, you can use the "mailto" URL scheme to open the user's default email client:
    // window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
