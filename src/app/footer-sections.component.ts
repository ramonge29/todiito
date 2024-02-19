import { Component } from '@angular/core';

@Component({
  selector: 'todiito-footer-section',
  standalone: true,
  template: `
    <section class="p-16">
      <ul class="flex justify-center items-center gap-4">
        <li>
          <a href="https://heavyduty.builders/" class="no-underline"
            >Contacto</a
          >
        </li>
        <li><a href="https://solana.com/es/docs">Documentación</a></li>
        <li>
          <a href="https://solana.com/es/privacy-policy">Privacy Policy</a>
        </li>
      </ul>
    </section>
  `,
})
export class FooterSectionComponent {}
