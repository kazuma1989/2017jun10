import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { HotTableModule } from 'ng2-handsontable';

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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
