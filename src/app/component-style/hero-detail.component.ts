import { Component, Input } from '@angular/core';
import { Hero } from '../ng-for/hero';

@Component({
    selector: 'app-styles-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: [
        './hero-detail.component.css'
    ]
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
