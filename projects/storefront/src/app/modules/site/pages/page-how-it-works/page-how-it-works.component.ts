import { Component } from '@angular/core';
import { theme } from '../../../../../data/theme';

@Component({
    selector: 'app-page-how-it-works',
    templateUrl: './page-how-it-works.component.html',
})
export class PageHowItWorksComponent {
    theme = theme;

    constructor() { }
}
