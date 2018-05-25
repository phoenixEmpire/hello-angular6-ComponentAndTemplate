import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterLeaveComponent } from './enter-leave.component';
import { EnterLeaveStatesComponent } from './enter-leave-states.component';
import { KeyframesComponent } from './keyframes.component';
import { GroupsComponent } from './groups.component';

const routes: Routes = [
    { path: 'animation/enter-leave', component: EnterLeaveComponent },
    { path: 'animation/enter-leave-states', component: EnterLeaveStatesComponent },
    { path: 'animation/keyframes', component: KeyframesComponent },
    { path: 'animation/groups', component: GroupsComponent }
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
