import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-styles-hero-team',
    template: `
        <h3>Hero Team</h3>
        <ul>
            <li *ngFor="let member of hero.team">
                {{member}}
            </li>
        </ul>
    `
})
export class HeroTeamComponent {
    @Input()
    hero: Hero;
}
