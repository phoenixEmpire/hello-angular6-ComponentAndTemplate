import { Component } from '@angular/core';
import { HEROES } from './heroes';

@Component({
    templateUrl: './flying-heroes.component.html',
    styles: ['#flyers,#all,#flyersImpure {font-style:italic;}']
})
export class FlyingHeroesComponent {
    heroes: any[] = [];
    canFly = true;
    mutate = true; // 改变原有数组
    title = 'Flying Heroes';

    constructor() {
        this.reset();
    }

    addHero(name: string) {
        name = name.trim();
        if (!name) {
            return;
        }
        const hero = { name, canFly: this.canFly };
        if (this.mutate) {
            // Pure pipe won't update display because heroes array reference is unchanged
            // Impure pipe will display
            this.heroes.push(hero);
        } else {
            // Pipe updates display because heroes array is a new object
            this.heroes = this.heroes.concat(hero);
        }
    }

    reset() {
        this.heroes = HEROES.slice(); // 选择数组的一部分浅拷贝到一个新数组对象,且原始数组不会被修改。
    }
}
