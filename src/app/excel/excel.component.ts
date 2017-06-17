import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';

@Component({
    selector: 'app-excel',
    templateUrl: './excel.component.html',
    styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

    data: any;
    options: any;

    excelFile: string;

    constructor(
        private http: Http,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

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

    onSubmit() {
        let excelFile: string = this.excelFile;

        if (!excelFile.endsWith('.json')) {
            excelFile += '.json';
        }

        this.http.post(`/api/editJson/${excelFile}`, {
            content: this.data
        }).subscribe((resp: Response) => {
            console.log(resp.text());
        });
    }

}
