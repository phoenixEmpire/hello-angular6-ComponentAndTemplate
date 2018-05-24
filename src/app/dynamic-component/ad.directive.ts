import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appDynamicAdHost]'
})
export class AdDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
