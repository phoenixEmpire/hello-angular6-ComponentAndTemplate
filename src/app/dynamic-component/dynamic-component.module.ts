import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-jbo-ad.component';
import { DynamicComponentRoutingModule } from './dynamic-component.routing';
import { IndexComponent } from './index.component';
import { AdService } from './ad.service';

@NgModule({
    declarations: [
        IndexComponent,
        AdBannerComponent,
        AdDirective,
        HeroProfileComponent,
        HeroJobAdComponent
    ],
    imports: [
        CommonModule,
        DynamicComponentRoutingModule
    ],
    exports: [],
    entryComponents: [HeroProfileComponent, HeroJobAdComponent],
    providers: [AdService]
})
export class DynamicComponentModule { }
