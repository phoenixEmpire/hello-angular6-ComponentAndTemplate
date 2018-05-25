import { Component, Input } from '@angular/core';
import { Hero, HeroService } from './hero.service';
import { trigger, style, state, animate, transition, keyframes } from '@angular/animations';

@Component({
    templateUrl: './keyframes.component.html',
    styleUrls: ['animation.css'],
    providers: [HeroService],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void=>*', [
                animate(300, keyframes([
                    style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
                ]))
            ]),
            transition('*=>void', [
                animate(300, keyframes([
                    style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                    style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                    style({ opacity: 0, transform: 'translateX(100%)', offset: 1 })
                ]))
            ])
        ])
    ]
})
export class KeyframesComponent {
    heroes: Hero[];

    constructor(private heroService: HeroService) {
        this.heroes = heroService.heroes;
    }

    animationStart(event: AnimationEvent) {
        console.warn('Animation start ', event);
    }

    animationDone(event: AnimationEvent) {
        console.warn('Animation done ', event);
    }
}
