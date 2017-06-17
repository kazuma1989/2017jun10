import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '@angular/material';

import { HotTableModule } from 'ng2-handsontable';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { MdWriterComponent } from './md-writer/md-writer.component';
import { ExcelComponent } from './excel/excel.component';
import { TopComponent } from './top/top.component';


@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        MdWriterComponent,
        ExcelComponent,
        TopComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'top',
                pathMatch: 'full'
            },
            {
                path: 'top',
                component: TopComponent
            },
            {
                path: 'page1',
                component: Page1Component
            },
            {
                path: 'page2/:mdFile',
                component: Page2Component
            },
            {
                path: 'edit/:mdFile',
                component: MdWriterComponent
            },
            {
                path: 'excel',
                component: ExcelComponent
            },
        ]),
        HttpModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        HotTableModule,
        MarkdownModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
