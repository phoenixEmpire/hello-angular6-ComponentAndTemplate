import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionControlComponent } from './service-communicate/mission-control.component';

const routes: Routes = [
    { path: 'interaction/service-communicate', component: MissionControlComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ComponentInteractionRoutingModule { }
