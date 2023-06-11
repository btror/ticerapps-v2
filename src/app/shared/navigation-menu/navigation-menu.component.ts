import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  constructor(private elementRef: ElementRef) {}

  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }
}
