import { Component, HostBinding } from '@angular/core';
import { theme } from '../../../../../data/theme';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
})
export class NewsletterComponent {
    @HostBinding('class.footer-newsletter') classFooterNewsletter = true;

    theme = theme;

    socialLinks = [
        
    ];

    constructor() { }
}
