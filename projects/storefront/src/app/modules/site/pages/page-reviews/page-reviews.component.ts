import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-page-reviews',
    templateUrl: './page-reviews.component.html',
})
export class PageReviewsComponent {
    inputNumber: FormControl = new FormControl(3);

    constructor() { }
}
