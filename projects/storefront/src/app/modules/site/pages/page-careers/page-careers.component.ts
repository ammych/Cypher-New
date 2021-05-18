import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-page-careers',
    templateUrl: './page-careers.component.html',
})
export class PageCareersComponent {
    inputNumber: FormControl = new FormControl(3);

    constructor() { }
}
