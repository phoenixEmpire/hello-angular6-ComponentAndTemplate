import { Injectable } from '@angular/core';

export class Hero {
    constructor(public name: string, public state = 'inactive') { }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}

const ALL_HEORES = [
    'Windstorm',
    'RubberMan',
    'Bombasto',
    'Magneta',
    'Dynama',
    'Narco',
    'Celeritas',
    'Dr IQ',
    'Magma',
    'Tornado',
    'Mr. Nice'
].map(name => new Hero(name));

@Injectable()
export class HeroService {
    heroes: Hero[] = [];

    canAdd() {
        return this.heroes.length < ALL_HEORES.length;
    }

    canRemove() {
        return this.heroes.length > 0;
    }

    addActive(active = true) {
        const hero = ALL_HEORES[this.heroes.length];
        hero.state = active ? 'active' : 'inactive';
        this.heroes.push(hero);
    }

    addInactive() {
        this.addActive(false);
    }

    remove() {
        this.heroes.length -= 1;
    }
}
