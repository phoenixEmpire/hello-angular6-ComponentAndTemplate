import { Component, Input, SimpleChanges, ViewChild, DoCheck } from '@angular/core';

class Hero {
    constructor(public name: string) { }
}

@Component({
    selector: 'app-do-check-child',
    template: `
        <div class="hero">
            <p>{{hero.name}} can {{power}}</p>
            <h4>-- Change Log --</h4>
            <div *ngFor="let changeLog of changeLogs">
                {{changeLog}}
            </div>
        </div>
    `,
    styles: [
        '.hero {margin-top:8px;padding:8px;background:LightYellow;}',
        'p {margin-top:8px;padding:8px;backgournd:Yellow;}'
    ]
})
export class DoCheckChildComponent implements DoCheck {
    @Input()
    hero: Hero;
    @Input()
    power: string;

    changeDetected = false;
    changeLogs: string[] = [];

    oldHeroName = '';
    oldPower = '';
    oldLogLength = 0;
    noChangeCount = 0;

    ngDoCheck() {
        if (this.hero.name !== this.oldHeroName) {
            this.changeDetected = true;
            this.changeLogs.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
            this.oldHeroName = this.hero.name;
        }

        if (this.power !== this.oldPower) {
            this.changeDetected = true;
            this.changeLogs.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
            this.oldPower = this.power;
        }

        if (this.changeDetected) {
            this.noChangeCount = 0;
        } else {
            // log that hook was called when there was no relevant change.
            const count = this.noChangeCount += 1;
            const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
            if (count === 1) {
                // add new "no change" message
                this.changeLogs.push(noChangeMsg);
            } else {
                // update last "no change" message
                this.changeLogs[this.changeLogs.length - 1] = noChangeMsg;
            }
        }

        this.changeDetected = false;
    }

    reset() {
        this.changeDetected = false;
        this.changeLogs = [];
    }
}

/************************************/
@Component({
    templateUrl: './do-check.component.html',
    styles: [
        '.parent {background:Lavender}'
    ]
})
export class DoCheckComponent {
    hero: Hero;
    power: string;
    title = 'DoCheck';
    @ViewChild(DoCheckChildComponent)
    childView: DoCheckChildComponent;

    constructor() {
        this.reset();
    }

    reset() {
        this.hero = new Hero('Windstorm');
        this.power = 'sing';
        if (this.childView) {
            this.childView.reset();
        }
    }
}
