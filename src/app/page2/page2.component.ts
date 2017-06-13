import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

    mdFile: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        // ActivatedRoute の snapshot と Observable の違いを理解するため、二通りの方法でパラメーター取得している
        // snapshot は、別コンポーネント間遷移でないと更新されない
        console.debug('ngOnInit', this.route.snapshot.params.mdFile);

        this.route.params.subscribe((params: Params) => {
            // subscribe したほうは、同じコンポーネント間であっても、遷移のたびに毎回呼ばれる
            console.debug(params.mdFile);

            this.mdFile = params.mdFile;
        });
    }

}
