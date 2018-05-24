import { Component, DoCheck, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
    templateUrl: './all-hooks-parent.component.html',
    styles: ['.parent {background:moccasin}'],
    providers: [LoggerService]
})
export class AllHooksParentComponent {
    hasChild = false;
    hooksLog: string[];

    heroName = 'Windstorm';

    constructor(private logger: LoggerService) {
        this.hooksLog = logger.logs;
    }

    toggleChild() {
        this.hasChild = !this.hasChild;
        if (this.hasChild) { // 创建子视图
            this.heroName = 'WindStorm';
            this.logger.clear(); // clear log on create
        }
        this.hooksLog = this.logger.logs;
        this.logger.tick();
    }

    updateHero() {
        this.heroName += '!';
        this.logger.tick();
    }
}
