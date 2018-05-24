import { Component, AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';
import { LoggerService } from '../logger.service';
import { HooksAfterContentGrandchildComponent } from './after-content-grandchild.component';

@Component({
    selector: 'app-hooks-after-content-child',
    templateUrl: './after-content-child.component.html'
})
export class HooksAfterContentChildComponent implements AfterContentInit, AfterContentChecked {
    private prevHero = '';
    comment = '';

    // Query for a CONTENT child of type `HooksAfterContentGrandchildComponent`
    @ContentChild(HooksAfterContentGrandchildComponent)
    contentGrandchild: HooksAfterContentGrandchildComponent;
    constructor(private logger: LoggerService) {
        this.logIt('AfterContent constructor');
    }

    ngAfterContentInit() {
        // contentChild is set after the content has been initialized
        this.logIt('AfterContentInit');
        this.doSomething();
    }

    ngAfterContentChecked() {
        // contentChild is updated after the content has been checked
        if (this.prevHero === this.contentGrandchild.hero) {
            this.logIt('AfterContentChecked (no change)');
        } else {
            this.prevHero = this.contentGrandchild.hero;
            this.logIt('AfterContentChecked');
            this.doSomething();
        }
    }

    // This surrogate for real business logic sets the `comment`
    private doSomething() {
        this.comment = this.contentGrandchild.hero.length > 10 ? `That's a long name` : '';
    }

    private logIt(method: string) {
        const child = this.contentGrandchild;
        const message = `${method}: ${child ? child.hero : 'no'} child content`;
        this.logger.log(message);
    }
}
