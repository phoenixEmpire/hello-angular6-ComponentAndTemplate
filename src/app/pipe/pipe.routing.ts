import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlyingHeroesComponent } from './flying-heroes.component';

const routes: Routes = [
    { path: 'pipe/flying-heroes', component: FlyingHeroesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PipeRoutingModule { }
