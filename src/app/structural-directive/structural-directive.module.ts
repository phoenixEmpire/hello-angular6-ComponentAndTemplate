import { NgModule } from '@angular/core';
import { StructuralDirectiveRoutingModule } from './structural-directive-routing.module';
import { UnlessComponent } from './unless.component';
import { UnlessDirective } from './unless.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UnlessComponent,
        UnlessDirective
    ],
    imports: [
        CommonModule,
        StructuralDirectiveRoutingModule
    ],
    exports: [
        UnlessComponent,
        UnlessDirective
    ]
})
export class StructuralDirectiveModule { }
