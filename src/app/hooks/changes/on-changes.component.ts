import { Component, OnChanges, Input, SimpleChanges, ViewChild } from '@angular/core';

class Hero {
    constructor(public name: string) { }
}

@Component({
    selector: 'app-on-changes-child',
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
export class OnChangesChildComponent implements OnChanges {
    @Input()
    hero: Hero;
    @Input()
    power: string;

    changeLogs: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        // tslint:disable-next-line:forin
        for (const propName in changes) {
            const change = changes[propName];
            const currentvalue = JSON.stringify(change.currentValue);
            const prevValue = JSON.stringify(change.previousValue);
            this.changeLogs.push(`${propName}: currentValue = ${currentvalue}, previousValue = ${prevValue}`);
        }
    }

    reset() {
        this.changeLogs = [];
    }
}

/************************************/
@Component({
    templateUrl: './on-changes.component.html',
    styles: [
        '.parent {background:Lavender}'
    ]
})
export class OnChangesComponent {
    hero: Hero;
    power: string;
    title = 'OnChange';
    @ViewChild(OnChangesChildComponent)
    childView: OnChangesChildComponent;

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
