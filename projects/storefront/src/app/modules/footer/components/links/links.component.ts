import { Component, HostBinding, Input } from '@angular/core';
import { Link } from '../../../../interfaces/link';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
})
export class LinksComponent {
    @Input() header: string;

    @Input() links: Link[] = [];

    @HostBinding('class.footer-links') classFooterLinks = true;

    constructor() { }
}
