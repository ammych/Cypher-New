import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-share-links',
    templateUrl: './share-links.component.html',
})
export class ShareLinksComponent {
    @HostBinding('class.share-links') classShareLinks = true;

    constructor() { }
}
