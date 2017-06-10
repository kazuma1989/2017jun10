import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { HotTableModule } from 'ng2-handsontable';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule,
        HotTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
