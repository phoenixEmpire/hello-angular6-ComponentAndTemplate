import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlyingHeroesComponent } from './flying-heroes.component';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from './flying-heroes.pipe';
import { PipeRoutingModule } from './pipe.routing';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        FlyingHeroesComponent,
        FlyingHeroesPipe,
        FlyingHeroesImpurePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipeRoutingModule
    ],
    exports: [
        FlyingHeroesComponent,
        FlyingHeroesPipe,
        FlyingHeroesImpurePipe
    ]
})
export class PipeModule { }
