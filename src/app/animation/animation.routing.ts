import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterLeaveComponent } from './enter-leave.component';

const routes: Routes = [
    { path: 'animation/enter-leave', component: EnterLeaveComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AnimationRoutingModule { }
