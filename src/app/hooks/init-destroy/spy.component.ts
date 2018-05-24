import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
    templateUrl: './spy.component.html',
    styles: [
        '.parent {background:khaki;}',
        '.heroes {background:LightYellow;padding:0 8px;}'
    ],
    providers: [LoggerService]
})
export class SpyComponent {
    newName = 'Herbie';
    heroes: string[] = ['Windstorm', 'Magneta'];

    constructor(private logger: LoggerService) { }

    addHero() {
        if (this.newName.trim()) {
            this.heroes.push(this.newName.trim());
            this.newName = '';
            // this.logger.tick();
        }
    }

    removeHero(hero: string) {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
        this.logger.tick();
    }

    reset() {
        this.logger.log('-- reset --');
        this.heroes = [];
        // this.logger.tick();
    }
}

