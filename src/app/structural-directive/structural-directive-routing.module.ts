
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnlessComponent } from './unless.component';

const routes: Routes = [
    { path: 'structural-directive/unless', component: UnlessComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class StructuralDirectiveRoutingModule { }
