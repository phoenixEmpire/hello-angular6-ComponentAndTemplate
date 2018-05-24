import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-styles-hero-tour',
    templateUrl: './hero-tour.component.html',
    styles: [
        'h1 { font-weight:normal; }'
    ]
})
export class HeroTourComponent {
    hero = new Hero('Human Torch', ['Mister Fantastic', 'Invisible Woman', 'Thing']);

    @HostBinding('class')
    get themeClass() {
        return 'theme-light';
    }
}
