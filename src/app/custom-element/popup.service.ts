import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef, ComponentFactory, ComponentRef } from '@angular/core';
import { PopupComponent } from './popup.component';

@Injectable()
export class PopupService {
    constructor(
        private injector: Injector,
        private applicationRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    // Previous dynamic-loading method required you to set up infrastructure before adding the popup to the DOM.
    showAsComponent(message: string) {
        // Create element
        const popup = document.createElement('popup-component');

        // Create the component and wire it up with the element
        const factory: ComponentFactory<PopupComponent> = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
        const popupComponentRef: ComponentRef<PopupComponent> = factory.create(this.injector, [], popup);

        // Attach to the view so that the change detector knows to run
        this.applicationRef.attachView(popupComponentRef.hostView);

        // Listen to the close event
        popupComponentRef.instance.closed.subscribe(() => {
            document.body.removeChild(popup);
            this.applicationRef.detachView(popupComponentRef.hostView);
        });

        // Set the message
        popupComponentRef.instance.message = message;

        // Add to the DOM
        document.body.appendChild(popup);
    }

    // This uses the new custom-element method to add the popup to the DOM.
    showAsElement(message: string) {
        // Create element
        const popupEle = document.createElement('popup-element');
        // Listen to the close event
        popupEle.addEventListener('closed', () => document.body.removeChild(popupEle));
        // Set the message
        popupEle['message'] = message;
        // Add to the DOM
        document.body.appendChild(popupEle);
    }
}
