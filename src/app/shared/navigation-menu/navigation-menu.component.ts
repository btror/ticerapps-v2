import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        this.scroll(sectionId);
      });
    } else {
      this.scroll(sectionId);
    }
  }

  scroll(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'auto' });
    }
  }
}
