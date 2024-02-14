import { Component } from '@angular/core';

@Component({
  selector: 'todiito-hero-section',
  standalone: true,
  template: `
    <section class="px-24 py-32 bg-white bg-opacity-5">
      <p class="text-center text-3xl">Este es el Hero</p>
    </section>
  `,
})

export class HeroSectionComponent {}
