import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TrackByComponent } from './ng-for/track-by.component';
import { HooksModule } from './hooks/hooks.module';
import { CommonModule } from '@angular/common';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { ComponentStyleModule } from './component-style/component-style.module';
import { DynamicComponentModule } from './dynamic-component/dynamic-component.module';
import { CustomElementModule } from './custom-element/custom-element.module';

const routes: Routes = [
  { path: 'track-by', component: TrackByComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TrackByComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HooksModule,
    ComponentInteractionModule,
    ComponentStyleModule,
    CustomElementModule,
    DynamicComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
