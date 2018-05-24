import { Component, Input, ViewChild, ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';
import { Ad } from './ad';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad.component';

@Component({
    selector: 'app-dynamic-ad-banner',
    templateUrl: './ad-banner.component.html'
})
export class AdBannerComponent implements OnInit, OnDestroy {
    @Input()
    ads: Ad[];
    currentAdIndex = -1;

    @ViewChild(AdDirective)
    adDirective: AdDirective;

    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.loadComponent();
        this.renderAd();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        const adItem = this.ads[this.currentAdIndex];

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        // Represents a container where one or more Views can be attached.
        const viewContainerRef = this.adDirective.viewContainerRef;
        // Destroys all Views in this container.
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    renderAd() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}
