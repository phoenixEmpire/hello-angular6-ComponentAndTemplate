import {
    Component, Input, OnInit, OnChanges, SimpleChanges,
    DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import { LoggerService } from '../logger.service';

let nextId = 1;

export class AllHooksChildAbsctract implements OnInit {
    constructor(private logger: LoggerService) { }

    logIt(msg: string) {
        this.logger.log(`#${nextId++} ${msg}`);
    }

    ngOnInit() {
        this.logIt('OnInit');
    }
}

@Component({
    selector: 'app-all-hooks-child',
    templateUrl: './all-hooks-child.component.html',
    styles: ['p {background:LightYellow;padding:8px;}']
})
export class AllHooksChildComponent extends AllHooksChildAbsctract
    implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input()
    name: string;

    private verb = 'initialized';

    constructor(logger: LoggerService) {
        super(logger); // 派生类的构造函数中必须包含super调用。
        const is = this.name ? 'is' : 'is not';
        this.logIt(`name ${is} known at construction`);
    }

    // only called for/if there is an @input variable set by parent.
    ngOnChanges(changes: SimpleChanges) {
        const changesMsgs: string[] = [];
        for (const propName in changes) {
            if (propName === 'name') {
                const name = changes['name'].currentValue;
                changesMsgs.push(`name ${this.verb} to ${name}`);
            } else {
                changesMsgs.push(propName + '' + this.verb);
            }
        }
        this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
        this.verb = 'changed';
    }

    ngDoCheck() {
        this.logIt(`DoCheck`);
    }

    ngAfterContentInit() {
        this.logIt(`AfterContentInit`);
    }

    ngAfterContentChecked() {
        this.logIt(`AfterContentChecked`);
    }

    ngAfterViewInit() {
        this.logIt(`AfterViewInit`);
    }

    ngAfterViewChecked() {
        this.logIt(`AfterViewChecked`);
    }

    ngOnDestroy() {
        this.logIt(`OnDestroy`);
    }
}
