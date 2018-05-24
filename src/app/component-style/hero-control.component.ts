import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-styles-hero-control',
    template: `
        <style>
            button{
                background-color:white;
                border:1px solid #777;
            }
        </style>
        <h3>Controls</h3>
        <button (click)="activate();">Activate</button>
    `
})
export class HeroControlComponent {
    @Input()
    hero: Hero;
    activate() {
        this.hero.active = true;
    }
}
