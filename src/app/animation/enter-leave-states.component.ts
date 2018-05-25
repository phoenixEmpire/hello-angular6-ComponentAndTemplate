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
        trigger('flyInOutStates', [
            state('inactive', style({ transform: 'translateX(0) scale(1)' })),
            state('active', style({ transform: 'translateX(0) scale(1.1)' })),
            transition('void=>inactive', [
                style({ transform: 'translateX(-100%) scale(1)' }), // 左侧飞入
                animate(100)
            ]),
            transition('void=>active', [
                style({ transform: 'translateX(0) scale(0)' }), // 放大进入
                animate(100)
            ]),
            transition('inactive=>active', animate('100ms ease-in')), // 放大
            transition('active=>inactive', animate('100ms ease-out')), // 缩小
            transition('inactive=>void', [
                animate(100, style({ transform: 'translateX(100%) scale(1)' })) // 右侧飞出
            ]),
            transition('active=>void', [
                animate(200, style({ transform: 'translateX(0) scale(0)' })) // 缩小消失
            ])
        ])
    ]
})
export class EnterLeaveStatesComponent {
    heroes: Hero[];

    constructor(private heroService: HeroService) {
        this.heroes = heroService.heroes;
    }
}
