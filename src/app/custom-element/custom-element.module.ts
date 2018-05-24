import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupService } from './popup.service';
import { CustomElementRoutingModule } from './custom-element.routing';
import { PopupComponent } from './popup.component';
import { IndexComponent } from './index.component';

// include the PopupService provider,
// but exclude PopupComponent from compilation,because it will be added dynamically

@NgModule({
    declarations: [
        IndexComponent,
        PopupComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CustomElementRoutingModule
    ],
    exports: [

    ],
    entryComponents: [
        PopupComponent
    ],
    providers: [
        PopupService
    ]
})
export class CustomElementModule { }
