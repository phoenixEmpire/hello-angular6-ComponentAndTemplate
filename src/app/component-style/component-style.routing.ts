import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroTourComponent } from './hero-tour.component';

const routes: Routes = [
    { path: 'component-style/hero-tour', component: HeroTourComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ComponentStyleRoutingModule { }
