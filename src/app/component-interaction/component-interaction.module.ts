import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInteractionRoutingModule } from './component-interaction.routing';
import { MissionControlComponent } from './service-communicate/mission-control.component';
import { AstronautComponent } from './service-communicate/astronaut.component';

@NgModule({
    declarations: [
        MissionControlComponent,
        AstronautComponent
    ],
    imports: [
        CommonModule,
        ComponentInteractionRoutingModule
    ],
    exports: [
        MissionControlComponent,
        AstronautComponent
    ]
})
export class ComponentInteractionModule { }
