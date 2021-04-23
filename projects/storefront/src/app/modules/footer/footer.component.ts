import { Component } from '@angular/core';
import { theme } from '../../../data/theme';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    theme = theme;

    constructor() { }
}
