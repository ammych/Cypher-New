import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-page-privacy',
    templateUrl: './page-privacy.component.html',
})
export class PagePrivacyComponent {
    inputNumber: FormControl = new FormControl(3);

    constructor() { }
}
