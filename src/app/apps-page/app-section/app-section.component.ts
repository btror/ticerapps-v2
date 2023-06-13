import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss'],
})
export class AppSectionComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() platform!: string;
  @Input() link!: string;
  @Input() iconPath!: string;
  @Input() price!: string;
  showFullDescription = false;

  openLink(): void {
    if (this.link) {
      window.open(this.link, '_blank');
    }
  }
}
