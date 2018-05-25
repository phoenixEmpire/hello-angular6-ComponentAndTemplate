import { Component, Input } from '@angular/core';
import { Hero, HeroService } from './hero.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

/*
 * 
 */

@Component({
    templateUrl: './enter-leave-states.component.html',
    providers: [HeroService],
    styleUrls: ['./animation.css'],
    animations: [
        trigger('flyInOut', [
            state('inactive', style({ transform: 'translateX(0) scale(1)' })),
            state('active', style({ transform: 'translateX(0) scale(1.1)' })),
            transition('void=>*', [
                style({ transform: 'translateX(-100%)' }), // 转场的起始样式
                animate(100)
            ]),
            transition('*=>void', [
                animate(100, style({ transform: 'translateX(100%)' })) // 转场的结束样式
            ])
        ])
    ]
})
export class EnterLeaveStatesComponent {
    @Input()
    heroes: Hero[];

    constructor(private heroService: HeroService) {
        this.heroes = heroService.heroes;
    }
}
