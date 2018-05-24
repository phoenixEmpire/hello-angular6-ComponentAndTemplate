import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-styles-hero-main',
    template: `
        <app-styles-quest-summary></app-styles-quest-summary>
        <!-- 投影 -->
        <app-styles-hero-detail [hero]="hero" [class.active]="hero.active">
            <app-styles-hero-control [hero]="hero"></app-styles-hero-control>
        </app-styles-hero-detail>
    `
})
export class HeroMainComponent {
    @Input()
    hero: Hero;
}
