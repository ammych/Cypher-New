import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-block-banners',
    templateUrl: './block-banners.component.html',
})
export class BlockBannersComponent {
    @HostBinding('class.block') classBlock = true;

    @HostBinding('class.block-banners') classBlockBanners = true;

    constructor() { }
}
