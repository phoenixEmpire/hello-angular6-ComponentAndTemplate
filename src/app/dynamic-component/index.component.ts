import { Component, OnInit, Input } from '@angular/core';
import { Ad } from './ad';
import { AdService } from './ad.service';

@Component({
    template: `
        <app-dynamic-ad-banner [ads]="ads"></app-dynamic-ad-banner>
    `
})
export class IndexComponent implements OnInit {
    @Input()
    ads: Ad[];

    constructor(private adService: AdService) { }

    ngOnInit() {
        this.ads = this.adService.getAds();
    }
}
