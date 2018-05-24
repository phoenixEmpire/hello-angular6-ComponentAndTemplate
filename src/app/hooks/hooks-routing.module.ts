import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllHooksParentComponent } from './all-hooks/all-hooks-parent.component';
import { SpyComponent } from './init-destroy/spy.component';
import { OnChangesComponent } from './changes/on-changes.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { AfterContentComponent } from './after-content/after-content.component';

const hooksRoutes: Routes = [
    { path: 'hooks/all-hooks', component: AllHooksParentComponent },
    { path: 'hooks/init-destroy', component: SpyComponent },
    { path: 'hooks/changes', component: OnChangesComponent },
    { path: 'hooks/do-check', component: DoCheckComponent },
    { path: 'hooks/after-view', component: AfterViewComponent },
    { path: 'hooks/after-content', component: AfterContentComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(hooksRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HooksRoutingModule { }
