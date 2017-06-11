import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

    data: any[] = [
        {
            "id": "SKHTYO18",
            "name": {
                "first": "John",
                "last": "Doe"
            },
            "address": "address",
            "product": {
                "description": "product description",
                "options": ["aa", "bb", "cc"]
            },
            "price": 1200,
            "isActive": "Yes"
        },
    ];
    colHeaders: string[] = ['ID', 'First Name', 'Last Name', 'Address', 'Favorite food', 'Price', 'Is active'];
    columns: any[] = [
        {
            data: 'id'
        },
        {
            data: 'name.first',
            renderer: 'text',
            readOnly: true
        },
        {
            data: 'name.last',
            readOnly: true
        },
        {
            data: 'address'
        },
        {
            data: 'product.description',
            source: 'product.options',
            optionField: 'description',
            type: 'autocomplete',
            strict: false,
            visibleRows: 4
        },
        {
            data: 'price',
            type: 'numeric',
            format: '$ 0,0.00'
        },
        {
            data: 'isActive',
            type: 'checkbox',
            checkedTemplate: 'Yes',
            uncheckedTemplate: 'No'
        }
    ];
    colWidths: number[] = [null, null, null, null, null, null, 30];
    options: any = {
        stretchH: 'all',
        columnSorting: true,
        contextMenu: [
            'row_above', 'row_below', 'remove_row'
        ]
    };

  constructor() { }

  ngOnInit() {
  }

}
