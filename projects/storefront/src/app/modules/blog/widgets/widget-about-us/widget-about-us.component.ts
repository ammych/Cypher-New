import { Component, HostBinding } from '@angular/core';
import { theme } from '../../../../../data/theme';

@Component({
    selector: 'app-widget-about-us',
    templateUrl: './widget-about-us.component.html',
})
export class WidgetAboutUsComponent {
    socialLinks = [
        
    ];

    @HostBinding('class.card') classCard = true;

    @HostBinding('class.widget') classWidget = true;

    @HostBinding('class.widget-about-us') classWidgetAboutUs = true;

    constructor() { }
}
