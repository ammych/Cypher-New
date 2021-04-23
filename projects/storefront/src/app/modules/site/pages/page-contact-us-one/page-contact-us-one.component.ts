import { Component } from '@angular/core';
import { theme } from '../../../../../data/theme';

@Component({
    selector: 'app-page-contact-us-one',
    templateUrl: './page-contact-us-one.component.html',
})
export class PageContactUsOneComponent {
    theme = theme;

    constructor() { }
}
