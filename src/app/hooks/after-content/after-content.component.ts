import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
    templateUrl: './after-content.component.html',
    styles: [
        '.parent {background:burlywood}'
    ],
    providers: [LoggerService]
})
export class AfterContentComponent {
    show = true;

    constructor(public logger: LoggerService) { }

    reset() {
        this.logger.clear();
        // quickly remove and reload AfterContentComponent which recreates it
        this.show = false;
        this.logger.tick_then(() => this.show = true);
    }
}
