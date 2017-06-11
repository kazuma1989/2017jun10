import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { HotTableModule } from 'ng2-handsontable';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
          {
            path: '',
            redirectTo: 'page1',
            pathMatch: 'full'
          },
          {
            path: 'page1',
            component: Page1Component
          },
          {
            path: 'page2',
            component: Page2Component
          },
        ]),
        HttpModule,
        FormsModule,
        MaterialModule,
        HotTableModule,
        MarkdownModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
