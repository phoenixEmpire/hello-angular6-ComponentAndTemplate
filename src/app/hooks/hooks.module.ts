import { NgModule } from '@angular/core';
import { HooksRoutingModule } from './hooks-routing.module';
import { AllHooksParentComponent } from './all-hooks/all-hooks-parent.component';
import { AllHooksChildComponent } from './all-hooks/all-hooks-child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpyComponent } from './init-destroy/spy.component';
import { SpyDirective } from './init-destroy/spy.directive';
import { OnChangesComponent, OnChangesChildComponent } from './changes/on-changes.component';
import { DoCheckComponent, DoCheckChildComponent } from './do-check/do-check.component';
import { AfterViewComponent, AfterViewChildComponent, AfterViewGrandchildComponent } from './after-view/after-view.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { HooksAfterContentChildComponent } from './after-content/after-content-child.component';
import { HooksAfterContentGrandchildComponent } from './after-content/after-content-grandchild.component';

@NgModule({
    declarations: [
        AllHooksParentComponent,
        AllHooksChildComponent,
        SpyComponent,
        SpyDirective,
        OnChangesComponent,
        OnChangesChildComponent,
        DoCheckComponent,
        DoCheckChildComponent,
        AfterViewComponent,
        AfterViewChildComponent,
        AfterViewGrandchildComponent,
        AfterContentComponent,
        HooksAfterContentChildComponent,
        HooksAfterContentGrandchildComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HooksRoutingModule
    ],
    exports: [
        AllHooksParentComponent,
        AllHooksChildComponent,
        SpyComponent,
        SpyDirective,
        OnChangesComponent,
        OnChangesChildComponent,
        DoCheckComponent,
        DoCheckChildComponent,
        AfterViewComponent,
        AfterViewChildComponent,
        AfterViewGrandchildComponent,
        AfterContentComponent,
        HooksAfterContentChildComponent,
        HooksAfterContentGrandchildComponent
    ],
    providers: []
})
export class HooksModule { }
