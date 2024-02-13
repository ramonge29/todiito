import { Component } from "@angular/core";
import { FeatureSectionComponent } from "./feature-sections.component";
import { HeroSectionComponent } from "./hero-sections.component";

@Component({
    selector: 'todiito-home-page',
    standalone: true ,
    template:`
        <todiito-hero-section></todiito-hero-section>
        <todiito-feature-section></todiito-feature-section>
    `,
    imports: [HeroSectionComponent, FeatureSectionComponent],
})
export class HomePageComponent {}