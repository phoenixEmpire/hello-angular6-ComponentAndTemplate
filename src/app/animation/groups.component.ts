import { Component } from '@angular/core';
import { Hero, HeroService } from './hero.service';
import { trigger, style, state, animate, transition, group } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './groups.component.html',
    styleUrls: ['./animation.css'],
    providers: [HeroService],
    animations: [
        trigger('flyInOut', [
            state('in', style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
            transition('void=>*', [
                style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                group([
                    animate('0.3s 0.1s ease', style({ width: 120, transform: 'translateX(0)' })),
                    animate('0.3s ease', style({ opacity: 1 }))
                ])
            ]),
            transition('*=>void', [
                group([
                    animate('0.3s ease', style({ width: 10, transform: 'translateX(50px)' })),
                    animate('0.3s 0.2s ease', style({ opacity: 0 }))
                ])
            ])
        ])
    ]
})
export class GroupsComponent {
    heroes: Hero[];

constructor(private heroService: HeroService) {
    this.heroes = heroService.heroes;
}
}
