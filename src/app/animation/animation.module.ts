import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimationRoutingModule } from './animation.routing';
import { EnterLeaveComponent } from './enter-leave.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnterLeaveStatesComponent } from './enter-leave-states.component';
import { KeyframesComponent } from './keyframes.component';
import { GroupsComponent } from './groups.component';
@NgModule({
    declarations: [
        EnterLeaveComponent,
        EnterLeaveStatesComponent,
        KeyframesComponent,
        GroupsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        AnimationRoutingModule
    ],
    exports: [
        EnterLeaveComponent,
        EnterLeaveStatesComponent,
        KeyframesComponent,
        GroupsComponent
    ]
})
export class AnimationModule { }
