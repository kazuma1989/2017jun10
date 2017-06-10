import { Component } from '@angular/core';
import { Http, Request, Response } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app';

    buttonLabel = 'update';

    constructor(private http: Http) {
    }

    updateStatus() {
        this.http.request(new Request({
            method: 'GET',
            url: '/api/login'
        })).subscribe((res: Response) => {
            console.log(res);

            this.buttonLabel = res.json().status;
        });
    }

}
