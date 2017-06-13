import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-md-writer',
    templateUrl: './md-writer.component.html',
    styleUrls: ['./md-writer.component.css']
})
export class MdWriterComponent implements OnInit {

    mdFile: string;
    content: string;

    constructor(
        private http: Http,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.content = '';

        this.route.params.subscribe((params: Params) => {
            let mdFile: string = params.mdFile;

            this.mdFile = mdFile;
            this.http.get(`/data/${mdFile}`).subscribe((resp: Response) => {
                this.content = resp.text();
            });
        });
    }

    onSubmit() {
        let mdFile: string = this.mdFile;

        if (!mdFile.endsWith('.md')) {
            mdFile += '.md';
        }

        this.http.post(`/api/edit/${mdFile}`, {
            content: this.content
        }).subscribe((resp: Response) => {
            console.log(resp.text());

            this.router.navigate(['page2', mdFile]);
        });
    }

}
