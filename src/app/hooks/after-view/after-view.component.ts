import { Component, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { LoggerService } from '../logger.service';

/************************************/
@Component({
    selector: 'app-after-view-grandchild',
    template: `<input [(ngModel)]="hero"/>`
})
export class AfterViewGrandchildComponent {
    hero = 'Magneta';
}

/************************************/
@Component({
    selector: 'app-after-view-child',
    template: `
        <div>-- grandchild view begins --</div>
            <app-after-view-grandchild></app-after-view-grandchild>
        <div>-- grandchild view ends --</div>
        <p *ngIf="comment" class="comment">
            {{comment}}
        </p>
    `
})
export class AfterViewChildComponent implements AfterViewInit, AfterViewChecked {
    private prevHero = '';
    comment = '';

    // Query for a VIEW child of type `AfterViewGrandchildComponent`
    @ViewChild(AfterViewGrandchildComponent)
    grandchildView: AfterViewGrandchildComponent;

    constructor(private logger: LoggerService) {
        this.logIt('AfterView constructor');
    }

    private logIt(method: string) {
        const grandchild = this.grandchildView;
        const msg = `${method}: ${grandchild ? grandchild.hero : 'no'} grandchild view`;
        this.logger.log(msg);
    }

    ngAfterViewInit() {
        // viewChild is set after the view has been initialized
        this.logIt('AfterViewInit');
        this.doSomething();
    }

    ngAfterViewChecked() {
        // viewChild is updated after the view has been checked
        if (this.prevHero === this.grandchildView.hero) {
            this.logIt('AfterViewChecked (no change)');
        } else {
            this.prevHero = this.grandchildView.hero;
            this.logIt('AfterViewChecked');
            this.doSomething();
        }
    }

    // This surrogate for real business logic sets the `comment`
    private doSomething() {
        const c = this.grandchildView.hero.length > 10 ? `That's a long name` : '';
        if (c !== this.comment) {
            // Wait a tick because the component's view has already been checked
            this.logger.tick_then(() => this.comment = c);
        }
    }
}

/************************************/
@Component({
    selector: 'app-after-view',
    template: `
        <div class="parent">
            <h2>AfterView</h2>
            <app-after-view-child *ngIf="show"></app-after-view-child>

            <h4>-- AfterView Logs --</h4>
            <p>
                <button (click)="reset();">Reset</button>
            </p>
            <div *ngFor="let log of logger.logs">
                {{log}}
            </div>
        </div>
    `,
    styles: [
        '.parent {background:burlywood}'
    ],
    providers: [LoggerService]
})
export class AfterViewComponent {
    show = true;

    constructor(public logger: LoggerService) { }

    reset() {
        this.logger.clear();
        // quickly remove and reload AfterViewChildComponent which recreates it
        this.show = false;
        this.logger.tick_then(() => this.show = true);
    }
}
