import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimationRoutingModule } from './animation.routing';
import { EnterLeaveComponent } from './enter-leave.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [
        EnterLeaveComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        AnimationRoutingModule
    ],
    exports: [
        EnterLeaveComponent
    ]
})
export class AnimationModule { }
