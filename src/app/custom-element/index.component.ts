import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';

@Component({
    templateUrl: './index.component.html'
})
export class IndexComponent {
    constructor(private injector: Injector, public popup: PopupService) {
        // on init, convert PopupComponent to a custom element
        const PopupElement = createCustomElement(PopupComponent, { injector: this.injector });
        // register the custom element with the browser.
        customElements.define('popup-element', PopupElement);
    }
}
