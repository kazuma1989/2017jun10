import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'app-md-writer',
    templateUrl: './md-writer.component.html',
    styleUrls: ['./md-writer.component.css']
})
export class MdWriterComponent implements OnInit {

    mdFile: string;
    content: string = '# hello world';

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.http.post(`/api/edit/${this.mdFile}`, {
            mdFile: this.mdFile,
            content: this.content
        }).subscribe((resp: Response) => {
            console.log(resp);
        })
    }

}
