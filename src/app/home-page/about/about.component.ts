import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.lazyLoadImage();
  }

  lazyLoadImage() {
    const imgElement = this.elementRef.nativeElement.querySelector('img[lazy]');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imgSrc = entry.target.getAttribute('src') ?? '';
          this.renderer.setAttribute(entry.target, 'src', imgSrc);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imgElement);
  }
}
