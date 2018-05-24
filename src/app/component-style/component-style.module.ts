import { NgModule } from '@angular/core';
import { HeroTourComponent } from './hero-tour.component';
import { CommonModule } from '@angular/common';
import { ComponentStyleRoutingModule } from './component-style.routing';
import { HeroMainComponent } from './hero-main.component';
import { QuestSummaryComponent } from './quest-summary.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroTeamComponent } from './hero-team.component';
import { HeroControlComponent } from './hero-control.component';

@NgModule({
    declarations: [
        HeroTourComponent,
        HeroMainComponent,
        QuestSummaryComponent,
        HeroDetailComponent,
        HeroTeamComponent,
        HeroControlComponent
    ],
    imports: [
        CommonModule,
        ComponentStyleRoutingModule
    ],
    exports: [
        HeroTourComponent,
        HeroMainComponent,
        QuestSummaryComponent,
        HeroDetailComponent,
        HeroTeamComponent,
        HeroControlComponent
    ],
    providers: [],
})
export class ComponentStyleModule { } { }
