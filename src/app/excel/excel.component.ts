import { Component, OnInit } from '@angular/core';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';

@Component({
    selector: 'app-excel',
    templateUrl: './excel.component.html',
    styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

    data: any;
    options: any;

    constructor() { }

    ngOnInit() {
        this.data = Handsontable.helper['createSpreadsheetData'](100, 12);
        this.options = {
            // height: 396,
            colHeaders: true,
            rowHeaders: true,
            stretchH: 'all',
            columnSorting: true,
            contextMenu: true
        };
    }

}
