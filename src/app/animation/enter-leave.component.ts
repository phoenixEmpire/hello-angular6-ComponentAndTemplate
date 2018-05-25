import { Component, Input } from '@angular/core';
import { Hero, HeroService } from './hero.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

/*
 * 这些样式在转场定义中被直接应用到了 void 状态，但并没有一个单独的 state(void) 定义。
 * 这么做是因为希望在进场与离场时使用不一样的转换效果：元素从左侧进场，从右侧离开。
 */

@Component({
    templateUrl: './enter-leave.component.html',
    providers: [HeroService],
    styleUrls: ['./animation.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
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
export class EnterLeaveComponent {
    @Input()
    heroes: Hero[];

    constructor(private heroService: HeroService) {
        this.heroes = heroService.heroes;
    }
}
