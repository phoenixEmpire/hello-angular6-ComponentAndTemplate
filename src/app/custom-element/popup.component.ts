import {
    Component, Input, Output, EventEmitter, HostBinding, HostListener
} from '@angular/core';
import { AnimationEvent, trigger, state, style, transition, animate } from '@angular/animations';
@Component({
    selector: 'app-custom-element-popup',
    template: `Popup: {{message}}{{state}}`,
    styleUrls: ['./popup.component.css'],
    host: {
        '[@stateAnimation]': 'state',
        '(@stateAnimation.done)': 'onAnimationDone($event)'
    },
    animations: [
        trigger('stateAnimation', [
            state('opened', style({ transform: 'translateY(0)' })),
            state('void,closed', style({ transform: 'translateY(100%)', opacity: 0 })),
            transition('*=>*', animate('500ms ease-in'))
        ])
    ]
})
export class PopupComponent {
    private state: 'opened' | 'closed' = 'closed';

    private _message: string;

    @Input()
    set message(message: string) {
        this._message = message;
        this.state = 'opened';

        setTimeout(() => this.state = 'closed', 2000);
    }

    get message(): string {
        return this._message;
    }

    @Output()
    closed = new EventEmitter();

    onAnimationDone(e: AnimationEvent) {
        if (e.toState === 'closed') {
            this.closed.next();
        }
    }

}
